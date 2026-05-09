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
  kapasite?: number;   // bloga ait toplam saat sayisi (1 veya 2)
  isFirst?: boolean;   // bloga ait ilk slot mu (devam satirlarinda false)
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
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'Türevin Kavramı', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'Manyetik Akı ve İndüksiyon', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'Esterler', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'Bitki Fizyolojisi', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Salı', tarih: '12 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Sayı Problemleri', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'Newton\'ın Hareket Yasaları', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'TYT', konu: 'Atom Modelleri (TYT)', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'Mendel İlkeleri ve Soyağacı', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '13 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'İki Kat (Yarım) Açı Formülleri', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'Düzgün Çembersel Hareket', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'Alkenler (Olefinler)', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'Nükleik Asitler ve Kalıtım', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Perşembe', tarih: '14 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Temel Yüzde Problemleri', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Kimya', sinav: 'TYT', konu: 'Asitler, Bazlar ve Tuzlar', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Biyoloji', sinav: 'TYT', konu: 'Hücre ve Madde Geçişi', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Cuma', tarih: '15 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'Belirli İntegral', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'Mercekler ve Optik', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'Elektrot Potansiyelleri', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'Oksijenli Solunum', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Pazartesi', tarih: '18 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Oran-Orantı Problemleri', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'Tork (Moment) ve Denge', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'TYT', konu: 'Kovalent Bağlar ve Etkileşimler', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'Ekosistem ve Madde Döngüleri', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Salı', tarih: '19 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'Logaritmalı Eşitsizlikler', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'Isı ve Sıcaklık', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'Atom Modelleri (AYT)', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'Sindirim Sistemi', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '20 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Hareket Problemleri', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'Akım Geçen Tele Manyetik Kuvvet', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'TYT', konu: 'Karışımlar ve Ayırma Yöntemleri', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'Mitoz ve Mayoz Bölünme', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Perşembe', tarih: '21 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'Maksimum-Minimum Problemleri', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'Madde ve Özkütle', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'Çözeltilerin Özellikleri', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'Lenf ve Bağışıklık Sistemi', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Cuma', tarih: '22 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Emek (İşçi-Havuz) Problemleri', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'AYT', konu: 'Sığa (Kapasite)', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'TYT', konu: 'Katılar ve Hal Değişimleri', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'Canlıların Temel Bileşenleri', kapasite: 1, isFirst: true },
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
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'Türevin Kavramı', kapasite: 2, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Matematik', sinav: 'AYT', konu: 'Türevin Kavramı', kapasite: 2, isFirst: false },
        { saat: '14:50 – 15:40', ders: 'Fizik', sinav: 'AYT', konu: 'Manyetik Akı ve İndüksiyon', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'Bitki Fizyolojisi', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Salı', tarih: '12 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Sayı Problemleri', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'Newton\'ın Hareket Yasaları', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Metni Anlama ve Yorumlama', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Kimya', sinav: 'AYT', konu: 'Esterler', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '13 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Fizik', sinav: 'AYT', konu: 'Düzgün Çembersel Hareket', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Biyoloji', sinav: 'TYT', konu: 'Mendel İlkeleri ve Soyağacı', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'TYT', konu: 'Atom Modelleri (TYT)', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Perşembe', tarih: '14 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'İki Kat (Yarım) Açı Formülleri', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Biyoloji', sinav: 'AYT', konu: 'Nükleik Asitler ve Kalıtım', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafın Ana Düşüncesi', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Kimya', sinav: 'AYT', konu: 'Alkenler (Olefinler)', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Cuma', tarih: '15 Mayıs', hafta: 1,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Temel Yüzde Problemleri', kapasite: 2, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Matematik', sinav: 'TYT', konu: 'Temel Yüzde Problemleri', kapasite: 2, isFirst: false },
        { saat: '14:50 – 15:40', ders: 'Fizik', sinav: 'TYT', konu: 'Mercekler ve Optik', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'Hücre ve Madde Geçişi', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Pazartesi', tarih: '18 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'Belirli İntegral', kapasite: 2, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Matematik', sinav: 'AYT', konu: 'Belirli İntegral', kapasite: 2, isFirst: false },
        { saat: '14:50 – 15:40', ders: 'Fizik', sinav: 'AYT', konu: 'Tork (Moment) ve Denge', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'AYT', konu: 'Oksijenli Solunum', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Salı', tarih: '19 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Oran-Orantı Problemleri', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Fizik', sinav: 'TYT', konu: 'Isı ve Sıcaklık', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Paragrafta Yardımcı Düşünceler', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Kimya', sinav: 'TYT', konu: 'Asitler, Bazlar ve Tuzlar', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Çarşamba', tarih: '20 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Fizik', sinav: 'AYT', konu: 'Akım Geçen Tele Manyetik Kuvvet', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Biyoloji', sinav: 'TYT', konu: 'Ekosistem ve Madde Döngüleri', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Kimya', sinav: 'AYT', konu: 'Elektrot Potansiyelleri', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30' },
      ],
    },
    {
      gun: 'Perşembe', tarih: '21 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'AYT', konu: 'Logaritmalı Eşitsizlikler', kapasite: 1, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Biyoloji', sinav: 'AYT', konu: 'Sindirim Sistemi', kapasite: 1, isFirst: true },
        { saat: '14:50 – 15:40', ders: 'Türkçe', sinav: 'TYT', konu: 'Düşünce Akışını Bozan Cümle', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Kimya', sinav: 'TYT', konu: 'Kovalent Bağlar ve Etkileşimler', kapasite: 1, isFirst: true },
      ],
    },
    {
      gun: 'Cuma', tarih: '22 Mayıs', hafta: 2,
      saatler: [
        { saat: '13:10 – 14:00', ders: 'Matematik', sinav: 'TYT', konu: 'Hareket Problemleri', kapasite: 2, isFirst: true },
        { saat: '14:00 – 14:50', ders: 'Matematik', sinav: 'TYT', konu: 'Hareket Problemleri', kapasite: 2, isFirst: false },
        { saat: '14:50 – 15:40', ders: 'Fizik', sinav: 'TYT', konu: 'Madde ve Özkütle', kapasite: 1, isFirst: true },
        { saat: '15:40 – 16:30', ders: 'Biyoloji', sinav: 'TYT', konu: 'Mitoz ve Mayoz Bölünme', kapasite: 1, isFirst: true },
      ],
    },
  ],
};

export const programlar: Program[] = [efelerProgrami, nazilliProgrami];
