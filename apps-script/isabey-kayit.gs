/**
 * İsabey Ortaokulu — Ücretsiz Öğle Yemeği ve Ödev Kulübü kayıt arka ucu.
 *
 * Kurulum:
 *  1. Yeni bir Google E-Tablo aç → Uzantılar → Apps Script.
 *  2. Bu dosyanın içeriğini Code.gs'e yapıştır, kaydet.
 *  3. Dağıt → Yeni dağıtım → Tür: Web uygulaması
 *       Yürütme: Ben  ·  Erişim: Herkes
 *  4. Çıkan /exec ile biten URL'yi src/pages/isabey-kayit.astro içindeki
 *     ENDPOINT sabitine yapıştır.
 *
 * Kod değişirse: Dağıt → Dağıtımları yönet → Düzenle → Sürüm: Yeni sürüm
 * (URL aynı kalır).
 */

const SHEET_NAME = 'Kayıtlar';
const LIMIT = 20;
// Anahtar formdan gelir; tabloya okunur etiket yazılır.
const GUN_ETIKET = {
  '2026-09-28': '28 Eylül Pazartesi',
  '2026-09-29': '29 Eylül Salı',
  '2026-09-30': '30 Eylül Çarşamba',
  '2026-10-01': '1 Ekim Perşembe',
  '2026-10-02': '2 Ekim Cuma',
};
const GUNLER = Object.keys(GUN_ETIKET);
const SINIFLAR = ['5', '6', '7'];
const HEADERS = ['Kayıt Zamanı', 'Gün', 'Öğrenci Adı Soyadı', 'Sınıf', 'Veli Adı Soyadı', 'Veli Telefonu'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

function counts_(sh) {
  const c = {};
  const byLabel = {};
  GUNLER.forEach(function (g) { c[g] = 0; byLabel[GUN_ETIKET[g]] = g; });
  const n = sh.getLastRow() - 1;
  if (n > 0) {
    sh.getRange(2, 2, n, 1).getDisplayValues().forEach(function (r) {
      const g = byLabel[r[0]];
      if (g) c[g]++;
    });
  }
  return c;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function clean_(v) {
  return String(v || '').replace(/\s+/g, ' ').trim().slice(0, 80);
}

// Formu açan sayfa doluluk bilgisini buradan alır.
function doGet() {
  return json_({ ok: true, limit: LIMIT, counts: counts_(sheet_()) });
}

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: 'Geçersiz istek.' });
  }

  const ogrenci = clean_(data.ogrenci);
  const veli = clean_(data.veli);
  const sinif = clean_(data.sinif);
  const gun = clean_(data.gun);
  // 5XX XXX XX XX biçimine indir (0 veya +90 önekleri atılır).
  const telefon = String(data.telefon || '').replace(/\D/g, '').replace(/^(90|0)(?=5\d{9}$)/, '');

  if (ogrenci.length < 3 || veli.length < 3) return json_({ ok: false, error: 'Ad soyad alanlarını eksiksiz doldurun.' });
  if (SINIFLAR.indexOf(sinif) === -1) return json_({ ok: false, error: 'Geçerli bir sınıf seçin.' });
  if (GUNLER.indexOf(gun) === -1) return json_({ ok: false, error: 'Geçerli bir gün seçin.' });
  if (!/^5\d{9}$/.test(telefon)) return json_({ ok: false, error: 'Geçerli bir cep telefonu numarası girin (05XX XXX XX XX).' });

  // Aynı anda gelen kayıtların 20 sınırını aşmaması için kilit.
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(15000)) return json_({ ok: false, error: 'Sistem yoğun, lütfen tekrar deneyin.' });
  try {
    const sh = sheet_();
    const c = counts_(sh);
    if (c[gun] >= LIMIT) {
      return json_({ ok: false, full: true, error: 'Seçtiğiniz gün dolu. Lütfen başka bir gün seçin.', counts: c });
    }
    // Formül enjeksiyonunu önlemek için baştaki = + - @ karakterlerini etkisizleştir.
    const safe = function (s) { return /^[=+\-@]/.test(s) ? "'" + s : s; };
    sh.appendRow([new Date(), GUN_ETIKET[gun], safe(ogrenci), sinif, safe(veli), "'0" + telefon]);
    c[gun]++;
    return json_({ ok: true, counts: c });
  } finally {
    lock.releaseLock();
  }
}
