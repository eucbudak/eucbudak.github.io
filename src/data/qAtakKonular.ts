// AUTO-GENERATED from KNT Akademi xlsx files on 2026-05-09.
// Sources: 'ATAK DERS SAATLERI.xlsx' (AYT) + 'tyt kritik.xlsx' (TYT)

export type Sinav = 'AYT' | 'TYT';
export type Kriticite = 'en-cok' | 'cok-kritik' | 'kritik' | 'orta' | 'nadir';

export type Konu = {
  sinav: Sinav;
  ders: string;
  konu: string;
  soru4Yil: number;
  kriticite: Kriticite;
  detay: string;
};

export const KRITICITE_LABEL: Record<Kriticite, string> = {
  'en-cok':     'En Cok Cikan',
  'cok-kritik': 'Cok Kritik',
  'kritik':     'Kritik',
  'orta':       'Orta',
  'nadir':      'Nadir',
};

export const KRITICITE_COLOR: Record<Kriticite, string> = {
  'en-cok':     'bg-red-600 text-white',
  'cok-kritik': 'bg-red-500/15 text-red-700 ring-1 ring-red-500/30',
  'kritik':     'bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/30',
  'orta':       'bg-amber-400/20 text-amber-700 ring-1 ring-amber-500/30',
  'nadir':      'bg-stone-200 text-stone-600 ring-1 ring-stone-300',
};

export const konular: Konu[] = [
  { sinav: 'AYT', ders: 'AYT Matematik', konu: 'İKİ KAT (YARIM) AÇI FORMÜLLERİ', soru4Yil: 8, kriticite: 'cok-kritik', detay: 'İki kat/yarım açı formülleri, toplam-fark, sinüs-kosinüs teoremi, trig denklem' },
  { sinav: 'AYT', ders: 'AYT Matematik', konu: 'BELİRLİ İNTEGRAL', soru4Yil: 8, kriticite: 'cok-kritik', detay: 'Belirli integral, eğri altı alan, iki eğri arası alan,' },
  { sinav: 'AYT', ders: 'AYT Matematik', konu: 'TÜREVİN KAVRAMI', soru4Yil: 7, kriticite: 'cok-kritik', detay: 'Türev kuralları, zincir kuralı,' },
  { sinav: 'AYT', ders: 'AYT Matematik', konu: 'LOGARİTMALI EŞİTSİZLİKLER', soru4Yil: 6, kriticite: 'cok-kritik', detay: 'Logaritma özellikleri, log denklem-eşitsizlik, üstel-log uygulama (deprem, ses, pH)' },
  { sinav: 'AYT', ders: 'AYT Matematik', konu: 'MAKSİMUM MİNİMUM PROBLEMLERİ', soru4Yil: 5, kriticite: 'cok-kritik', detay: 'Optimizasyon problemleri (kutu, alan, hacim maks-min)' },
  { sinav: 'AYT', ders: 'AYT Matematik', konu: 'İKİ FONKSİYONUN BİLEŞKESİ VE BİR FONKSİYONUN TERSİ', soru4Yil: 4, kriticite: 'kritik', detay: 'Bileşke fonksiyon, ters fonksiyon, parçalı fonksiyon' },
  { sinav: 'AYT', ders: 'AYT Matematik', konu: 'ARTAN AZALAN FONKSİYON', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Türevle artan/azalan, ekstremum noktaları' },
  { sinav: 'AYT', ders: 'AYT Matematik', konu: 'GERÇEK (REEL) SAYI DİZİLERİ', soru4Yil: 4, kriticite: 'kritik', detay: 'Aritmetik-geometrik dizi, genel terim, toplam formülü' },
  { sinav: 'AYT', ders: 'AYT Geometri', konu: 'ÇEMBERİN TEMEL ELEMANLARI', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Çemberde merkez/çevre/teğet-kiriş açıları' },
  { sinav: 'AYT', ders: 'AYT Geometri', konu: 'ÇEMBERDE UZUNLUK', soru4Yil: 3, kriticite: 'cok-kritik', detay: 'Çemberde kuvvet, teğet uzunluğu, kiriş özellikleri' },
  { sinav: 'AYT', ders: 'AYT Geometri', konu: 'DAİREDE ALAN', soru4Yil: 3, kriticite: 'kritik', detay: 'Daire/daire dilimi alan-çevre, daire parçası alanı' },
  { sinav: 'AYT', ders: 'AYT Geometri', konu: 'DOĞRU DENKLEMLERİ', soru4Yil: 3, kriticite: 'kritik', detay: 'Analitik düzlemde doğru, eğim, nokta-doğru uzaklığı' },
  { sinav: 'AYT', ders: 'AYT Geometri', konu: 'DOĞRU VE ÇEMBERİN BİRBİRİNE GÖRE DURUMLARI', soru4Yil: 2, kriticite: 'kritik', detay: 'Doğru-çember konum ilişkileri' },
  { sinav: 'AYT', ders: 'AYT Geometri', konu: 'ÇEMBERİN ANALİTİK İNCELENMESİ', soru4Yil: 2, kriticite: 'kritik', detay: 'Çember denklemi, doğru-çember kesişimi' },
  { sinav: 'AYT', ders: 'AYT Geometri', konu: 'SİLİNDİR', soru4Yil: 2, kriticite: 'kritik', detay: 'Silindir alan-hacim, dik/eğik silindir' },
  { sinav: 'AYT', ders: 'AYT Fizik', konu: 'MANYETİK AKI VE INDÜKSİYON', soru4Yil: 5, kriticite: 'cok-kritik', detay: 'Faraday-Lenz indüksiyon, transformatör, alternatif akım, RLC devreleri' },
  { sinav: 'AYT', ders: 'AYT Fizik', konu: 'DÜZGÜN ÇEMBERSEL HAREKET', soru4Yil: 5, kriticite: 'cok-kritik', detay: 'Çembersel hareket, merkezcil ivme/kuvvet; Kepler yasaları, kütle çekim' },
  { sinav: 'AYT', ders: 'AYT Fizik', konu: 'TORK(MOMENT) VE DENGE', soru4Yil: 5, kriticite: 'cok-kritik', detay: 'Tork-denge: çubuk-makara sistemi, ağırlık merkezi, çubukta denge' },
  { sinav: 'AYT', ders: 'AYT Fizik', konu: 'AKIM GEÇEN TELE ETKİ EDEN MANYETİK KUVVET', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Manyetik alanda yüklü parçacık (F=qvB), akım taşıyan tel-tel etkileşimi' },
  { sinav: 'AYT', ders: 'AYT Fizik', konu: 'SIĞA (KAPASİTE)', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Paralel levha kondansatör, sığa, dielektrik, seri/paralel bağlama, elektriksel potansiyel' },
  { sinav: 'AYT', ders: 'AYT Fizik', konu: 'BASİT HARMONİK HAREKET', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Yay-kütle sistemi, sarkaç periyodu (her yıl 1 banko soru); fotoelektrik olay' },
  { sinav: 'AYT', ders: 'AYT Fizik', konu: 'MOMENTUMUN KORUNUMU', soru4Yil: 3, kriticite: 'cok-kritik', detay: 'İtme-momentum, esnek/esnek olmayan çarpışma, momentumun korunumu' },
  { sinav: 'AYT', ders: 'AYT Fizik', konu: 'FOTOELEKTRİK OLAYIN TEKNOLOJİDE KULLANIMI', soru4Yil: 3, kriticite: 'kritik', detay: 'Fotoelektrik olay, modern fizik (Compton, kara cisim, özel görelilik)' },
  { sinav: 'AYT', ders: 'AYT Fizik', konu: 'ÇİFT YARIKTA GİRİŞİM (YOUNG DENEYİ)', soru4Yil: 3, kriticite: 'kritik', detay: 'Young deneyi, girişim-kırınım, Doppler olayı (ışık/ses)' },
  { sinav: 'AYT', ders: 'AYT Fizik', konu: 'RADYOAKTİVİTE', soru4Yil: 2, kriticite: 'kritik', detay: 'Yarılanma süresi, alfa-beta-gama bozunumu, kararlılık kuşağı' },
  { sinav: 'AYT', ders: 'AYT Kimya', konu: 'ESTERLER', soru4Yil: 6, kriticite: 'cok-kritik', detay: 'Organik fonksiyonel gruplar: alkol/eter, aldehit/keton, asit/ester, amin/amid' },
  { sinav: 'AYT', ders: 'AYT Kimya', konu: 'Alkenler (Olefinler)', soru4Yil: 5, kriticite: 'cok-kritik', detay: 'Alken/alkin katılma tepk. (Markovnikov), hibridleşme (sp/sp²/sp³), izomeri' },
  { sinav: 'AYT', ders: 'AYT Kimya', konu: 'ELEKTROT POTANSİYELLERİ', soru4Yil: 5, kriticite: 'cok-kritik', detay: 'Yükseltgenme-indirgenme yarı tepkime, pil EMK, standart elektrot pot.' },
  { sinav: 'AYT', ders: 'AYT Kimya', konu: 'ATOM MODELLERİ', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Modern atom teorisi: kuantum sayıları (n,l,mₗ,mₛ), orbital, uyarılmış-temel hal' },
  { sinav: 'AYT', ders: 'AYT Kimya', konu: 'ÇÖZELTİLERİN ÖZELLİKLERİ', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Kolligatif özellikler: donma alçalması, kaynama yükselmesi, osmotik basınç' },
  { sinav: 'AYT', ders: 'AYT Kimya', konu: 'ELEKTROLİZ-KOROZYON', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Elektroliz, Faraday yasası, korozyon ve katodik koruma' },
  { sinav: 'AYT', ders: 'AYT Kimya', konu: 'SULU ÇÖZELTİLERDE ASİT-BAZ DENGESİ', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'pH-pOH hesabı, kuvvetli/zayıf asit-baz, Ka-Kb hesaplamaları' },
  { sinav: 'AYT', ders: 'AYT Kimya', konu: 'ÇÖZÜNME-ÇÖKELME TEPKİMELERİ', soru4Yil: 3, kriticite: 'kritik', detay: 'Ksp çözünürlük çarpımı, ortak iyon etkisi, çökelek oluşumu' },
  { sinav: 'AYT', ders: 'AYT Kimya', konu: 'KİMYASAL DENGE', soru4Yil: 3, kriticite: 'cok-kritik', detay: 'Kc-Kp denge sabiti, Le Chatelier ilkesi (sıcaklık/basınç/derişim etkisi)' },
  { sinav: 'AYT', ders: 'AYT Kimya', konu: 'ASİT VE BAZLARIN AYRIŞMA DENGESİ', soru4Yil: 2, kriticite: 'kritik', detay: 'Tampon çözelti, hidroliz, Henderson-Hasselbalch' },
  { sinav: 'AYT', ders: 'AYT Biyoloji', konu: 'NÜKLEİK ASİTLERİN KEŞFİ VE ÖNEMİ', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'DNA replikasyonu, transkripsiyon-translasyon, kod tablosu, lac/trp operon' },
  { sinav: 'AYT', ders: 'AYT Biyoloji', konu: 'OKSİJENLİ SOLUNUM + FOTOSENTEZ', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Glikoliz-Krebs-ETS, oksijenli/oksijensiz solunum (etil alkol, laktik asit fermantasyonu)' },
  { sinav: 'AYT', ders: 'AYT Biyoloji', konu: 'DOLAŞIM', soru4Yil: 3, kriticite: 'kritik', detay: 'Sindirim sistemi organları, enzimler (pepsin, tripsin, lipaz, amilaz), ince bağırsak emilim' },
  { sinav: 'AYT', ders: 'AYT Biyoloji', konu: 'SOLUNUM', soru4Yil: 3, kriticite: 'kritik', detay: 'Dolaşım: kalp yapısı, küçük/büyük dolaşım, lenf, doğal/edinilmiş bağışıklık' },
  { sinav: 'AYT', ders: 'AYT Biyoloji', konu: 'SİNDİRİM', soru4Yil: 3, kriticite: 'cok-kritik', detay: 'Çift döllenme, çiçek yapısı, tozlaşma türleri, meyve gelişimi' },
  { sinav: 'TYT', ders: 'TYT Biyoloji', konu: 'MADDE ALIŞVERİŞİ BÖLÜNME ORGANELLER', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Hücre: prokaryot-ökaryot, organel görevleri (mitokondri, lizozom, ER, golgi), zardan madde geçişi (osmoz/difüzyon/aktif)' },
  { sinav: 'TYT', ders: 'TYT Biyoloji', konu: 'DÖNGÜLER BESİN PİRAMİDİ', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Ekosistem: azot/karbon döngüsü, besin piramidi/enerji akışı, biyom-komünite-popülasyon' },
  { sinav: 'TYT', ders: 'TYT Biyoloji', konu: 'HÜCRE BÖLÜNMELERİ', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Hücre bölünmeleri: mitoz vs mayoz farkları, krossing-over, gamet oluşumu' },
  { sinav: 'TYT', ders: 'TYT Fizik', konu: 'DÜZLEM AYNA KIRILMA', soru4Yil: 5, kriticite: 'cok-kritik', detay: 'Optik: yansıma-kırılma (Snell), düzlem/küresel ayna görüntü, mercekte görüntü oluşumu' },
  { sinav: 'TYT', ders: 'TYT Fizik', konu: 'NEWTON\'IN HAREKET YASALARI (DİNAMİK TYT )', soru4Yil: 5, kriticite: 'cok-kritik', detay: 'Hareket-kuvvet: Newton 2. yasa, ivmeli hareket, hız-zaman grafiği, sürtünmeli düzlem' },
  { sinav: 'TYT', ders: 'TYT Fizik', konu: 'ISI VE SICAKLIK', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Isı-sıcaklık: Q=mcΔT, hal değişimi grafiği, ısıl denge, genleşme' },
  { sinav: 'TYT', ders: 'TYT Fizik', konu: 'ELEKTRİK AKIMI', soru4Yil: 3, kriticite: 'cok-kritik', detay: 'Elektrik: Ohm yasası, basit/lambalı devre, elektriksel güç (V·I, I²R)' },
  { sinav: 'TYT', ders: 'TYT Geometri', konu: 'ÜÇGENDE EŞLİK VE BENZERLİK', soru4Yil: 5, kriticite: 'cok-kritik', detay: 'Üçgende açılar (iç-dış-açıortay), eşlik-benzerlik, alan formülleri' },
  { sinav: 'TYT', ders: 'TYT Geometri', konu: 'ÖZEL ÜÇGENLERDE ALAN', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Özel üçgenler: 30-60-90, 45-45-90, ikizkenar dik, eşkenar üçgen' },
  { sinav: 'TYT', ders: 'TYT Geometri', konu: 'DÖRTGENLER', soru4Yil: 3, kriticite: 'cok-kritik', detay: 'Özel dörtgenler: paralelkenar/dikdörtgen/kare/yamuk/eşkenar dörtgen alan-uzunluk' },
  { sinav: 'TYT', ders: 'TYT Geometri', konu: 'AÇIORTAY', soru4Yil: 2, kriticite: 'kritik', detay: 'Açıortay teoremi, üçgende açı-kenar bağıntıları, kenarortay' },
  { sinav: 'TYT', ders: 'TYT Geometri', konu: 'PİSAGOR', soru4Yil: 1, kriticite: 'kritik', detay: 'Pisagor teoremi, pisagor üçlüleri (3-4-5, 5-12-13, 8-15-17)' },
  { sinav: 'TYT', ders: 'TYT Geometri', konu: 'DÜZGÜN ÇOKGEN', soru4Yil: 1, kriticite: 'kritik', detay: 'Çokgenler: iç/dış açı toplamı, düzgün çokgen alan' },
  { sinav: 'TYT', ders: 'TYT Geometri', konu: 'MERKEZLER', soru4Yil: 0, kriticite: 'kritik', detay: '' },
  { sinav: 'TYT', ders: 'TYT Kimya', konu: 'ATOM MODELLERİ', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Atom ve periyodik sistem: elektron dizilimi, atom yarıçapı, EN, iyonlaşma enerjisi' },
  { sinav: 'TYT', ders: 'TYT Kimya', konu: 'KATILAR', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Maddenin halleri: katı-sıvı-gaz, hal değişim grafiği, denge buhar basıncı' },
  { sinav: 'TYT', ders: 'TYT Kimya', konu: 'ASİTLER, BAZLAR VE TUZLAR', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Asit-baz-tuz: Arrhenius tanımı, günlük asit-baz tanıma, indikatör, nötrleşme' },
  { sinav: 'TYT', ders: 'TYT Kimya', konu: 'KOVALENT BAĞLARIN OLUŞUMU', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Kimyasal türler arası etkileşim: iyonik/kovalent/metalik bağ; H bağı, dipol-dipol, London' },
  { sinav: 'TYT', ders: 'TYT Kimya', konu: 'KARIŞIMLAR', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Karışımlar: homojen/heterojen, ayırma yöntemleri (damıtma/süzme/ayırma hunisi)' },
  { sinav: 'TYT', ders: 'TYT Kimya', konu: 'KİMYANIN TEMEL KANUNLARI VE KİMYASAL HESAPLAMALAR', soru4Yil: 3, kriticite: 'kritik', detay: 'Kimyanın temel kanunları (kütlenin korunumu, sabit/katlı oranlar), denklem denkleştirme' },
  { sinav: 'TYT', ders: 'TYT Kimya', konu: 'ÇÖZELTİLERDE DERİŞİM', soru4Yil: 3, kriticite: 'kritik', detay: 'Derişim birimleri: kütlece % derişim, hacimce % derişim, ppm' },
  { sinav: 'TYT', ders: 'TYT Matematik', konu: 'BASİT OLAYLARIN OLASILIKLARI', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Basit/koşullu olasılık, bağımlı-bağımsız olaylar, P(A∪B), P(A∩B)' },
  { sinav: 'TYT', ders: 'TYT Matematik', konu: 'PERMÜTASYON (SIRALAMA)', soru4Yil: 3, kriticite: 'cok-kritik', detay: 'Permütasyon, tekrarlı permütasyon, kombinasyon (seçim)' },
  { sinav: 'TYT', ders: 'TYT Matematik', konu: 'FONKSİYONLARDA İŞLEMLER', soru4Yil: 3, kriticite: 'cok-kritik', detay: 'Fonksiyon: tanım/görüntü kümesi, bileşke, ters, grafik okuma' },
  { sinav: 'TYT', ders: 'TYT Matematik', konu: 'EBOB EKOK (AYT sorularında kullanmak için)', soru4Yil: 0, kriticite: 'kritik', detay: '' },
  { sinav: 'TYT', ders: 'TYT Matematik', konu: 'BASİT EŞİTSİZLİKLER', soru4Yil: 0, kriticite: 'kritik', detay: '' },
  { sinav: 'TYT', ders: 'TYT Matematik', konu: 'MUTLAK DEĞER', soru4Yil: 0, kriticite: 'kritik', detay: '' },
  { sinav: 'TYT', ders: 'TYT Türkçe', konu: 'PARAGRAFTA METNİ ANLAMA VE YORUMLAMA', soru4Yil: 6, kriticite: 'cok-kritik', detay: 'Paragrafta anlam çıkarımı, "altı çizili sözle anlatılmak istenen" (her yıl 5-7 soru)' },
  { sinav: 'TYT', ders: 'TYT Türkçe', konu: 'PARAGRAFIN ANA DÜŞÜNCESİ', soru4Yil: 5, kriticite: 'cok-kritik', detay: 'Ana düşünce, başlık, paragrafın konusu' },
  { sinav: 'TYT', ders: 'TYT Türkçe', konu: 'PARAGRAFTA YARDIMCI DÜŞÜNCELER', soru4Yil: 5, kriticite: 'cok-kritik', detay: 'Paragrafta yardımcı düşünce: "ulaşılamaz/değinilmemiştir" sorusu (her yıl 5-7 soru)' },
  { sinav: 'TYT', ders: 'TYT Türkçe', konu: 'BOŞ BIRAKILAN YERE DÜŞÜNCENİN AKIŞINA GÖRE HANGİSİ GETİRİLEBİLİR?', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Paragraf tamamlama (boşluk doldurma), uygun cümle ekleme' },
  { sinav: 'TYT', ders: 'TYT Türkçe', konu: 'DÜŞÜNCE AKIŞINI BOZAN CÜMLE', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Paragrafta yapı: akışı bozan cümle, paragraf bölme, giriş-gelişme-sonuç' },
  { sinav: 'TYT', ders: 'TYT Türkçe', konu: 'CÜMLEDE ANLAM', soru4Yil: 4, kriticite: 'cok-kritik', detay: 'Cümlede anlam: cümle yorumu, vurgulanmak istenen, neden-sonuç/koşul ilişkileri' },
];

// Sayisal ders listeleri (Mat/Geo/Fiz/Kim/Biy). Master listede yalniz bu dersler gosterilir.
export const DERS_SIRASI_AYT: string[] = [
  'AYT Matematik',
  'AYT Geometri',
  'AYT Fizik',
  'AYT Kimya',
  'AYT Biyoloji',
];

export const DERS_SIRASI_TYT: string[] = [
  'TYT Matematik',
  'TYT Geometri',
  'TYT Fizik',
  'TYT Kimya',
  'TYT Biyoloji',
];

// Backward compatible alias
export const DERS_SIRASI = DERS_SIRASI_AYT;