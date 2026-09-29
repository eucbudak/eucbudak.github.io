/**
 * KNT Akademi Nazilli — 5, 6 ve 7. sınıflar ücretsiz deneme sınavı (18 Ekim 2026) başvuru arka ucu.
 *
 * Kurulum:
 *  1. Yeni bir Google E-Tablo aç → Uzantılar → Apps Script.
 *  2. Bu dosyanın içeriğini Code.gs'e yapıştır, kaydet.
 *  3. Dağıt → Yeni dağıtım → Tür: Web uygulaması
 *       Yürütme: Ben  ·  Erişim: Herkes
 *  4. Çıkan /exec ile biten URL'yi src/pages/nazilli-deneme.astro içindeki
 *     ENDPOINT sabitine yapıştır.
 *
 * Kod değişirse: Dağıt → Dağıtımları yönet → Düzenle → Sürüm: Yeni sürüm
 * (URL aynı kalır).
 */

const SHEET_NAME = 'Başvurular';
const SINIFLAR = ['5', '6', '7'];
const HEADERS = ['Başvuru Zamanı', 'Öğrenci Adı Soyadı', 'Okulu', 'Sınıf', 'Veli Telefonu', 'KVKK Açık Rıza'];
// Aydınlatma/rıza metni değişirse sürümü artırın; hangi metne onay verildiği kayıtta durur.
const KVKK_SURUM = 'v1 (29.09.2026)';

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

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function clean_(v) {
  return String(v || '').replace(/\s+/g, ' ').trim().slice(0, 80);
}

function doGet() {
  return json_({ ok: true });
}

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: 'Geçersiz istek.' });
  }

  const ogrenci = clean_(data.ogrenci);
  const okul = clean_(data.okul);
  const sinif = clean_(data.sinif);
  // 5XX XXX XX XX biçimine indir (0 veya +90 önekleri atılır).
  const telefon = String(data.telefon || '').replace(/\D/g, '').replace(/^(90|0)(?=5\d{9}$)/, '');

  if (ogrenci.length < 3) return json_({ ok: false, error: 'Öğrencinin adını ve soyadını yazın.' });
  if (okul.length < 2) return json_({ ok: false, error: 'Öğrencinin okulunu yazın.' });
  if (SINIFLAR.indexOf(sinif) === -1) return json_({ ok: false, error: 'Geçerli bir sınıf seçin.' });
  if (!/^5\d{9}$/.test(telefon)) return json_({ ok: false, error: 'Geçerli bir cep telefonu numarası girin (05XX XXX XX XX).' });
  if (data.kvkk !== true) return json_({ ok: false, error: 'Başvuru için KVKK aydınlatma metnini onaylamanız gerekir.' });

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(15000)) return json_({ ok: false, error: 'Sistem yoğun, lütfen tekrar deneyin.' });
  try {
    // Formül enjeksiyonunu önlemek için baştaki = + - @ karakterlerini etkisizleştir.
    const safe = function (s) { return /^[=+\-@]/.test(s) ? "'" + s : s; };
    sheet_().appendRow([new Date(), safe(ogrenci), safe(okul), sinif, "'0" + telefon, 'Onaylandı — ' + KVKK_SURUM]);
    return json_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}
