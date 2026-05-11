// AUTO-GENERATED from 'ATAK DERS PLANI.xlsx' on 2026-05-09.
// Slot atama algoritmasi:
//   - Excel'deki kapasite N = o ders icin N saat ayrildi demektir (paralel sinif degil).
//   - Her ders kapasitesi kadar ARDISIK saat slotunu kullanir.
//     Ornek: Mat Ã—2 ise 13:10 + 14:00 ikisi de Mat (devam satiri).
//   - Bir sonraki ders, oncekinin bittigi saatte baslar.
//   - Sube bazli ders sirasi:
//       EFELER:  Mat -> Fiz -> Kim -> Biy -> (Turkce son)
//       NAZILLI: Mat -> Fiz -> Biy -> Turkce -> Kim
//                (Turkce Kim'den once = Turkce mutlaka, eleme Kimya'da)
//   - Yer kalmazsa konu eksiklere gider; raporlanir.
//   - Konu havuzu: AYT-TYT alterne (her dersin 10 gun boyunca dolu olduklari uzerinden).

export type Sube = 'efeler' | 'nazilli';
export type Ders = 'Matematik' | 'Fizik' | 'Kimya' | 'Biyoloji' | 'Türkçe';

export type SaatBlok = {
  saat:     string;
  ders?:    Ders;
  sinav?:   'TYT' | 'AYT';
  konu?:    string;
  kapasite?: number;
  isFirst?: boolean;
  // Matematik slotunda paralel ikinci ders (AYT + TYT ayni saatte)
  paralelSinav?: 'TYT' | 'AYT';
  paralelKonu?:  string;
};

export type ProgramGun = {
  gun:    string;
  tarih:  string;
  hafta:  1 | 2;
  saatler: SaatBlok[];
  tatil?: string;   // doluysa o gun resmi tatil, ders yok
};

export type Program = {
  sube:    Sube;
  baslik:  string;
  konum:   string;
  gunler:  ProgramGun[];
};

export const SAATLER: string[] = [
  '13:10 – 14:00',
  '14:00 – 14:50',
  '14:50 – 15:40',
  '15:40 – 16:30',
];

export const SUBE_BILGI: Record<Sube, { ad: string; konum: string; renk: string; rota: string }> = {
  efeler:  { ad: 'Efeler',  konum: 'Aydın · Efeler',  renk: 'text-[#FF6B1A]', rota: 'efeler'  },
  nazilli: { ad: 'Nazilli', konum: 'Aydın · Nazilli', renk: 'text-sky-400',  rota: 'nazilli' },
};

export const efelerProgrami: Program = {
  sube:   'efeler',
  baslik: 'KNT Akademi Efeler',
  konum:  'Aydın · Efeler',
  gunler: [
    {
      gun: 'Pazartesi', tarih: '11 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'BELİRLİ İNTEGRAL', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'TORK(MOMENT) VE DENGE', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'ESTERLER', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'OKSİJENLİ SOLUNUM + FOTOSENTEZ', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Salı', tarih: '12 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'BASİT OLAYLARIN OLASILIKLARI', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'NEWTON\'IN HAREKET YASALARI (DİNAMİK TYT )', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'TYT', konu: 'KOVALENT BAĞLARIN OLUŞUMU', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'HÜCRE BÖLÜNMELERİ', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '13 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'İKİ KAT (YARIM) AÇI FORMÜLLERİ', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'DÜZGÜN ÇEMBERSEL HAREKET', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'ELEKTROT POTANSİYELLERİ', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'NÜKLEİK ASİTLERİN KEŞFİ VE ÖNEMİ', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Perşembe', tarih: '14 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'FONKSİYONLARDA İŞLEMLER', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Kimya', sinav: 'TYT', konu: 'KARIŞIMLAR', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Biyoloji', sinav: 'TYT', konu: 'DÖNGÜLER BESİN PİRAMİDİ', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'PARAGRAFTA METNİ ANLAMA VE YORUMLAMA', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Cuma', tarih: '15 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'TÜREVİN KAVRAMI', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'DÜZLEM AYNA KIRILMA', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'Alkenler (Olefinler)', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'SİNDİRİM', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Pazartesi', tarih: '18 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'PERMÜTASYON (SIRALAMA)', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'MANYETİK AKI VE INDÜKSİYON', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'TYT', konu: 'ASİTLER, BAZLAR VE TUZLAR', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'MADDE ALIŞVERİŞİ BÖLÜNME ORGANELLER', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Salı', tarih: '19 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00' },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
      tatil: 'Atatürk\'ü Anma, Gençlik ve Spor Bayramı',
    },
    {
      gun: 'Çarşamba', tarih: '20 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'LOGARİTMALI EŞİTSİZLİKLER', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'ISI VE SICAKLIK', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'ELEKTROLİZ-KOROZYON', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'SOLUNUM', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Perşembe', tarih: '21 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'MUTLAK DEĞER', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'BASİT HARMONİK HAREKET', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'TYT', konu: 'ATOM MODELLERİ', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'DOLAŞIM', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Cuma', tarih: '22 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'MAKSİMUM MİNİMUM PROBLEMLERİ', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'ELEKTRİK AKIMI', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'SULU ÇÖZELTİLERDE ASİT-BAZ DENGESİ', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'PARAGRAFTA YARDIMCI DÜŞÜNCELER', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Pazartesi', tarih: '1 Haziran', hafta: 3,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'BASİT EŞİTSİZLİKLER', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Salı', tarih: '2 Haziran', hafta: 3,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'GERÇEK (REEL) SAYI DİZİLERİ', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '3 Haziran', hafta: 3,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'EBOB EKOK (AYT sorularında kullanmak için)', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Perşembe', tarih: '4 Haziran', hafta: 3,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'ARTAN AZALAN FONKSİYON', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Cuma', tarih: '5 Haziran', hafta: 3,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'İKİ FONKSİYONUN BİLEŞKESİ VE BİR FONKSİYONUN TERSİ', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
    },
  ],
};

export const nazilliProgrami: Program = {
  sube:   'nazilli',
  baslik: 'KNT Akademi Nazilli',
  konum:  'Aydın · Nazilli',
  gunler: [
    {
      gun: 'Pazartesi', tarih: '11 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'BELİRLİ İNTEGRAL', kapasite: 2, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Matematik', sinav: 'AYT', konu: 'BELİRLİ İNTEGRAL', kapasite: 2, isFirst: false },
        { saat: '14:50 – 15:40', ders: 'Fizik', sinav: 'AYT', konu: 'TORK(MOMENT) VE DENGE', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'OKSİJENLİ SOLUNUM + FOTOSENTEZ', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Salı', tarih: '12 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'BASİT OLAYLARIN OLASILIKLARI', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'NEWTON\'IN HAREKET YASALARI (DİNAMİK TYT )', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'ESTERLER', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'PARAGRAFTA METNİ ANLAMA VE YORUMLAMA', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '13 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Fizik', sinav: 'AYT', konu: 'DÜZGÜN ÇEMBERSEL HAREKET', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Kimya', sinav: 'TYT', konu: 'KOVALENT BAĞLARIN OLUŞUMU', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Biyoloji', sinav: 'TYT', konu: 'HÜCRE BÖLÜNMELERİ', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Perşembe', tarih: '14 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'İKİ KAT (YARIM) AÇI FORMÜLLERİ', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Kimya', sinav: 'AYT', konu: 'ELEKTROT POTANSİYELLERİ', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Biyoloji', sinav: 'AYT', konu: 'NÜKLEİK ASİTLERİN KEŞFİ VE ÖNEMİ', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'PARAGRAFTA YARDIMCI DÜŞÜNCELER', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Cuma', tarih: '15 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'FONKSİYONLARDA İŞLEMLER', kapasite: 2, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Matematik', sinav: 'TYT', konu: 'FONKSİYONLARDA İŞLEMLER', kapasite: 2, isFirst: false },
        { saat: '14:50 – 15:40', ders: 'Fizik', sinav: 'TYT', konu: 'DÜZLEM AYNA KIRILMA', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'DÖNGÜLER BESİN PİRAMİDİ', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Pazartesi', tarih: '18 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'TÜREVİN KAVRAMI', kapasite: 2, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Matematik', sinav: 'AYT', konu: 'TÜREVİN KAVRAMI', kapasite: 2, isFirst: false },
        { saat: '14:50 – 15:40', ders: 'Fizik', sinav: 'AYT', konu: 'MANYETİK AKI VE INDÜKSİYON', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'SİNDİRİM', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Salı', tarih: '19 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00' },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
      tatil: 'Atatürk\'ü Anma, Gençlik ve Spor Bayramı',
    },
    {
      gun: 'Çarşamba', tarih: '20 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Fizik', sinav: 'TYT', konu: 'ISI VE SICAKLIK', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Kimya', sinav: 'TYT', konu: 'KARIŞIMLAR', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Biyoloji', sinav: 'TYT', konu: 'MADDE ALIŞVERİŞİ BÖLÜNME ORGANELLER', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Perşembe', tarih: '21 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'PERMÜTASYON (SIRALAMA)', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Kimya', sinav: 'AYT', konu: 'Alkenler (Olefinler)', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Biyoloji', sinav: 'AYT', konu: 'SOLUNUM', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'PARAGRAFIN ANA DÜŞÜNCESİ', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Cuma', tarih: '22 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'LOGARİTMALI EŞİTSİZLİKLER', kapasite: 2, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Matematik', sinav: 'AYT', konu: 'LOGARİTMALI EŞİTSİZLİKLER', kapasite: 2, isFirst: false },
        { saat: '14:50 – 15:40', ders: 'Fizik', sinav: 'AYT', konu: 'BASİT HARMONİK HAREKET', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'DOLAŞIM', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Pazartesi', tarih: '1 Haziran', hafta: 3,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'MUTLAK DEĞER', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Salı', tarih: '2 Haziran', hafta: 3,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'MAKSİMUM MİNİMUM PROBLEMLERİ', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '3 Haziran', hafta: 3,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'BASİT EŞİTSİZLİKLER', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Perşembe', tarih: '4 Haziran', hafta: 3,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'GERÇEK (REEL) SAYI DİZİLERİ', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Cuma', tarih: '5 Haziran', hafta: 3,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'EBOB EKOK (AYT sorularında kullanmak için)', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50' },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30' },
      ],
    },
  ],
};

export const programlar: Program[] = [efelerProgrami, nazilliProgrami];
