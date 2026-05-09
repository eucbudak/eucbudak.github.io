// AUTO-GENERATED from 'ATAK DERS PLANI.xlsx' on 2026-05-09.
// Excel sheet'leri (NAZILLI + EFELER) saat-gun-ders kapasite matrisi olarak parse edildi.
// Saat slot atamasi:
//   13:10 -> Matematik, 14:00 -> Fizik, 14:50 -> Kimya, 15:40 -> Biyoloji
// Turkce dolu olan saatlerde sayisal yerine Turkce gosterilir (cakisma yok).
// Konu havuzu: her ders icin 5 AYT + 5 TYT, hafta esleme:
//   Hafta 1 = AYT, Hafta 2 = TYT (her iki sube icin de ayni)
//   Turkce: her zaman TYT konusu (AYT'de Turkce yok).

export type Sube = 'efeler' | 'nazilli';
export type Ders = 'Matematik' | 'Fizik' | 'Kimya' | 'Biyoloji' | 'Türkçe';

export type SaatBlok = {
  saat:     string;
  ders?:    Ders;
  sinav?:   'TYT' | 'AYT';
  konu?:    string;
  kapasite?: number;
};

export type ProgramGun = {
  gun:    string;
  tarih:  string;
  hafta:  1 | 2;
  saatler: SaatBlok[];
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
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafın Ana Düşüncesi', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Yardımcı Düşünceler', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Düşünce Akışını Bozan Cümle', kapasite: 1 },
      ],
    },
    {
      gun: 'Salı', tarih: '12 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Cümlede Anlam', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafın Ana Düşüncesi', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Yardımcı Düşünceler', kapasite: 1 },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '13 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'Türevin Kavramı', kapasite: 2 },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'Manyetik Akı ve İndüksiyon', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'Esterler', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'Bitki Fizyolojisi', kapasite: 1 },
      ],
    },
    {
      gun: 'Perşembe', tarih: '14 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Düşünce Akışını Bozan Cümle', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Cümlede Anlam', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafın Ana Düşüncesi', kapasite: 1 },
      ],
    },
    {
      gun: 'Cuma', tarih: '15 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Yardımcı Düşünceler', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Düşünce Akışını Bozan Cümle', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Cümlede Anlam', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
      ],
    },
    {
      gun: 'Pazartesi', tarih: '18 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafın Ana Düşüncesi', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Yardımcı Düşünceler', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Düşünce Akışını Bozan Cümle', kapasite: 1 },
      ],
    },
    {
      gun: 'Salı', tarih: '19 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Cümlede Anlam', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafın Ana Düşüncesi', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Yardımcı Düşünceler', kapasite: 1 },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '20 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Sayı Problemleri', kapasite: 2 },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'Newton\'ın Hareket Yasaları', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'TYT', konu: 'Atom Modelleri (TYT)', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'Mendel İlkeleri ve Soyağacı', kapasite: 1 },
      ],
    },
    {
      gun: 'Perşembe', tarih: '21 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Düşünce Akışını Bozan Cümle', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Cümlede Anlam', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafın Ana Düşüncesi', kapasite: 1 },
      ],
    },
    {
      gun: 'Cuma', tarih: '22 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Yardımcı Düşünceler', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Düşünce Akışını Bozan Cümle', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Cümlede Anlam', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
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
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'Türevin Kavramı', kapasite: 2 },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'Manyetik Akı ve İndüksiyon', kapasite: 1 },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'Bitki Fizyolojisi', kapasite: 1 },
      ],
    },
    {
      gun: 'Salı', tarih: '12 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafın Ana Düşüncesi', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Yardımcı Düşünceler', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Düşünce Akışını Bozan Cümle', kapasite: 1 },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '13 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00' },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'Düzgün Çembersel Hareket', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'Esterler', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'Nükleik Asitler ve Kalıtım', kapasite: 1 },
      ],
    },
    {
      gun: 'Perşembe', tarih: '14 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Cümlede Anlam', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafın Ana Düşüncesi', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Yardımcı Düşünceler', kapasite: 1 },
      ],
    },
    {
      gun: 'Cuma', tarih: '15 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'İki Kat (Yarım) Açı Formülleri', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'Tork (Moment) ve Denge', kapasite: 1 },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'Oksijenli Solunum', kapasite: 1 },
      ],
    },
    {
      gun: 'Pazartesi', tarih: '18 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Sayı Problemleri', kapasite: 2 },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'Newton\'ın Hareket Yasaları', kapasite: 1 },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'Mendel İlkeleri ve Soyağacı', kapasite: 1 },
      ],
    },
    {
      gun: 'Salı', tarih: '19 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafın Ana Düşüncesi', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Yardımcı Düşünceler', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Düşünce Akışını Bozan Cümle', kapasite: 1 },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '20 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00' },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'Mercekler ve Optik', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'TYT', konu: 'Atom Modelleri (TYT)', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'Hücre ve Madde Geçişi', kapasite: 1 },
      ],
    },
    {
      gun: 'Perşembe', tarih: '21 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Türkçe', sinav: 'TYT', konu: 'Cümlede Anlam', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1 },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafın Ana Düşüncesi', kapasite: 1 },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Yardımcı Düşünceler', kapasite: 1 },
      ],
    },
    {
      gun: 'Cuma', tarih: '22 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Temel Yüzde Problemleri', kapasite: 1 },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'Isı ve Sıcaklık', kapasite: 1 },
        { saat: '14:50 – 15:40' },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'Ekosistem ve Madde Döngüleri', kapasite: 1 },
      ],
    },
  ],
};

export const programlar: Program[] = [efelerProgrami, nazilliProgrami];
