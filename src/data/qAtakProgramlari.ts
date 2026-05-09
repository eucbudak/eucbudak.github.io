// Q ATAK KAMPI 11–22 Mayıs 2026 — Şubeye özel ders programları.
// İçerik: KNT Akademi koçlarının AYT ve TYT 4-yıllık soru analizine göre seçilen
// kritik konular. Şubeler farklı sıralama izler:
//   • Efeler:  Hafta 1 = AYT, Hafta 2 = TYT
//   • Nazilli: Hafta 1 = TYT, Hafta 2 = AYT
// Saatler iki şube için ortak (default). Şube ekibi içeriği uyarlarsa burada güncellenir.

export type Sube = 'efeler' | 'nazilli';

export type ProgramBlok = {
  saat:  string;
  ders:  'Matematik' | 'Geometri' | 'Fizik' | 'Kimya' | 'Biyoloji';
  sinav: 'TYT' | 'AYT';
  konu:  string;
};

export type ProgramGun = {
  gun:   string;
  tarih: string;
  hafta: 1 | 2;
  bloklar: ProgramBlok[];
};

export type Program = {
  sube:    Sube;
  baslik:  string;
  konum:   string;
  gunler:  ProgramGun[];
};

export const SUBE_BILGI: Record<Sube, { ad: string; konum: string; renk: string; rota: string }> = {
  efeler:  { ad: 'Efeler',  konum: 'Aydın · Efeler',  renk: 'text-[#FF6B1A]', rota: 'efeler'  },
  nazilli: { ad: 'Nazilli', konum: 'Aydın · Nazilli', renk: 'text-sky-400',  rota: 'nazilli' },
};

const SAATLER = [
  '09:00 – 10:30',
  '10:45 – 12:15',
  '13:30 – 15:00',
  '15:15 – 16:45',
  '17:00 – 18:30',
];

// Yardımcı: bir günün 5 bloğunu hızlıca üretmek için
function gun(
  gun: string, tarih: string, hafta: 1 | 2,
  mat: { sinav: 'TYT'|'AYT'; konu: string },
  geo: { sinav: 'TYT'|'AYT'; konu: string },
  fiz: { sinav: 'TYT'|'AYT'; konu: string },
  kim: { sinav: 'TYT'|'AYT'; konu: string },
  biy: { sinav: 'TYT'|'AYT'; konu: string },
): ProgramGun {
  return {
    gun, tarih, hafta,
    bloklar: [
      { saat: SAATLER[0], ders: 'Matematik', sinav: mat.sinav, konu: mat.konu },
      { saat: SAATLER[1], ders: 'Geometri',  sinav: geo.sinav, konu: geo.konu },
      { saat: SAATLER[2], ders: 'Fizik',     sinav: fiz.sinav, konu: fiz.konu },
      { saat: SAATLER[3], ders: 'Kimya',     sinav: kim.sinav, konu: kim.konu },
      { saat: SAATLER[4], ders: 'Biyoloji',  sinav: biy.sinav, konu: biy.konu },
    ],
  };
}

// ─── EFELER — Hafta 1: AYT odaklı, Hafta 2: TYT odaklı ─────────────────────
export const efelerProgrami: Program = {
  sube:   'efeler',
  baslik: 'KNT Akademi Efeler',
  konum:  'Aydın · Efeler',
  gunler: [
    // Hafta 1 (11–15 Mayıs) — AYT
    gun('Pazartesi', '11 Mayıs', 1,
      { sinav: 'AYT', konu: 'Türevin Kavramı' },
      { sinav: 'AYT', konu: 'Çemberin Temel Elemanları' },
      { sinav: 'AYT', konu: 'Manyetik Akı ve İndüksiyon' },
      { sinav: 'AYT', konu: 'Esterler' },
      { sinav: 'AYT', konu: 'Bitki Fizyolojisi' }),
    gun('Salı', '12 Mayıs', 1,
      { sinav: 'AYT', konu: 'İki Kat (Yarım) Açı Formülleri' },
      { sinav: 'AYT', konu: 'Piramitler' },
      { sinav: 'AYT', konu: 'Düzgün Çembersel Hareket' },
      { sinav: 'AYT', konu: 'Alkenler (Olefinler)' },
      { sinav: 'AYT', konu: 'Nükleik Asitler & Kalıtım' }),
    gun('Çarşamba', '13 Mayıs', 1,
      { sinav: 'AYT', konu: 'Belirli İntegral' },
      { sinav: 'AYT', konu: 'Çemberde Uzunluk' },
      { sinav: 'AYT', konu: 'Tork (Moment) ve Denge' },
      { sinav: 'AYT', konu: 'Elektrot Potansiyelleri' },
      { sinav: 'AYT', konu: 'Oksijenli Solunum' }),
    gun('Perşembe', '14 Mayıs', 1,
      { sinav: 'AYT', konu: 'Logaritmalı Eşitsizlikler' },
      { sinav: 'AYT', konu: 'Dairede Alan' },
      { sinav: 'AYT', konu: 'Akım Geçen Tele Manyetik Kuvvet' },
      { sinav: 'AYT', konu: 'Atom Modelleri' },
      { sinav: 'AYT', konu: 'Sindirim Sistemi' }),
    gun('Cuma', '15 Mayıs', 1,
      { sinav: 'AYT', konu: 'Maksimum-Minimum Problemleri' },
      { sinav: 'AYT', konu: 'Doğru Denklemleri' },
      { sinav: 'AYT', konu: 'Sığa (Kapasite)' },
      { sinav: 'AYT', konu: 'Çözeltilerin Özellikleri' },
      { sinav: 'AYT', konu: 'Lenf & Bağışıklık Sistemi' }),

    // Hafta 2 (18–22 Mayıs) — TYT
    gun('Pazartesi', '18 Mayıs', 2,
      { sinav: 'TYT', konu: 'Sayı Problemleri' },
      { sinav: 'TYT', konu: 'Üçgende Eşlik ve Benzerlik' },
      { sinav: 'TYT', konu: 'Newton\'ın Hareket Yasaları' },
      { sinav: 'TYT', konu: 'Atom Modelleri (TYT)' },
      { sinav: 'TYT', konu: 'Mendel İlkeleri & Soyağacı' }),
    gun('Salı', '19 Mayıs', 2,
      { sinav: 'TYT', konu: 'Temel Yüzde Problemleri' },
      { sinav: 'TYT', konu: 'Özel Üçgenlerde Alan' },
      { sinav: 'TYT', konu: 'Mercekler & Optik' },
      { sinav: 'TYT', konu: 'Asitler, Bazlar ve Tuzlar' },
      { sinav: 'TYT', konu: 'Hücre & Madde Geçişi' }),
    gun('Çarşamba', '20 Mayıs', 2,
      { sinav: 'TYT', konu: 'Oran-Orantı Problemleri' },
      { sinav: 'TYT', konu: 'Dik Prizmalarda Alan-Hacim' },
      { sinav: 'TYT', konu: 'Isı ve Sıcaklık' },
      { sinav: 'TYT', konu: 'Kovalent Bağlar & Etkileşimler' },
      { sinav: 'TYT', konu: 'Ekosistem & Madde Döngüleri' }),
    gun('Perşembe', '21 Mayıs', 2,
      { sinav: 'TYT', konu: 'Hareket Problemleri' },
      { sinav: 'TYT', konu: 'Dörtgenler' },
      { sinav: 'TYT', konu: 'Madde ve Özkütle' },
      { sinav: 'TYT', konu: 'Karışımlar & Ayırma Yöntemleri' },
      { sinav: 'TYT', konu: 'Mitoz & Mayoz Bölünme' }),
    gun('Cuma', '22 Mayıs', 2,
      { sinav: 'TYT', konu: 'Emek (İşçi-Havuz) Problemleri' },
      { sinav: 'TYT', konu: 'Silindir & Pisagor' },
      { sinav: 'TYT', konu: 'Elektrik Akımı (Ohm Yasası)' },
      { sinav: 'TYT', konu: 'Katılar & Hal Değişimleri' },
      { sinav: 'TYT', konu: 'Canlıların Temel Bileşenleri' }),
  ],
};

// ─── NAZİLLİ — Hafta 1: TYT odaklı, Hafta 2: AYT odaklı ────────────────────
export const nazilliProgrami: Program = {
  sube:   'nazilli',
  baslik: 'KNT Akademi Nazilli',
  konum:  'Aydın · Nazilli',
  gunler: [
    // Hafta 1 (11–15 Mayıs) — TYT
    gun('Pazartesi', '11 Mayıs', 1,
      { sinav: 'TYT', konu: 'Sayı Problemleri' },
      { sinav: 'TYT', konu: 'Üçgende Eşlik ve Benzerlik' },
      { sinav: 'TYT', konu: 'Newton\'ın Hareket Yasaları' },
      { sinav: 'TYT', konu: 'Karışımlar & Ayırma Yöntemleri' },
      { sinav: 'TYT', konu: 'Hücre & Madde Geçişi' }),
    gun('Salı', '12 Mayıs', 1,
      { sinav: 'TYT', konu: 'Temel Yüzde Problemleri' },
      { sinav: 'TYT', konu: 'Özel Üçgenlerde Alan' },
      { sinav: 'TYT', konu: 'Mercekler & Optik' },
      { sinav: 'TYT', konu: 'Asitler, Bazlar ve Tuzlar' },
      { sinav: 'TYT', konu: 'Mendel İlkeleri & Soyağacı' }),
    gun('Çarşamba', '13 Mayıs', 1,
      { sinav: 'TYT', konu: 'Hareket Problemleri' },
      { sinav: 'TYT', konu: 'Dörtgenler' },
      { sinav: 'TYT', konu: 'Madde ve Özkütle' },
      { sinav: 'TYT', konu: 'Atom Modelleri (TYT)' },
      { sinav: 'TYT', konu: 'Mitoz & Mayoz Bölünme' }),
    gun('Perşembe', '14 Mayıs', 1,
      { sinav: 'TYT', konu: 'Oran-Orantı Problemleri' },
      { sinav: 'TYT', konu: 'Dik Prizmalarda Alan-Hacim' },
      { sinav: 'TYT', konu: 'Isı ve Sıcaklık' },
      { sinav: 'TYT', konu: 'Kovalent Bağlar & Etkileşimler' },
      { sinav: 'TYT', konu: 'Ekosistem & Madde Döngüleri' }),
    gun('Cuma', '15 Mayıs', 1,
      { sinav: 'TYT', konu: 'Emek (İşçi-Havuz) Problemleri' },
      { sinav: 'TYT', konu: 'Silindir & Pisagor' },
      { sinav: 'TYT', konu: 'Elektrik Akımı (Ohm Yasası)' },
      { sinav: 'TYT', konu: 'Katılar & Hal Değişimleri' },
      { sinav: 'TYT', konu: 'Canlıların Temel Bileşenleri' }),

    // Hafta 2 (18–22 Mayıs) — AYT
    gun('Pazartesi', '18 Mayıs', 2,
      { sinav: 'AYT', konu: 'İki Kat (Yarım) Açı Formülleri' },
      { sinav: 'AYT', konu: 'Çemberin Temel Elemanları' },
      { sinav: 'AYT', konu: 'Düzgün Çembersel Hareket' },
      { sinav: 'AYT', konu: 'Esterler' },
      { sinav: 'AYT', konu: 'Bitki Fizyolojisi' }),
    gun('Salı', '19 Mayıs', 2,
      { sinav: 'AYT', konu: 'Belirli İntegral' },
      { sinav: 'AYT', konu: 'Piramitler' },
      { sinav: 'AYT', konu: 'Manyetik Akı ve İndüksiyon' },
      { sinav: 'AYT', konu: 'Alkenler (Olefinler)' },
      { sinav: 'AYT', konu: 'Nükleik Asitler & Kalıtım' }),
    gun('Çarşamba', '20 Mayıs', 2,
      { sinav: 'AYT', konu: 'Türevin Kavramı' },
      { sinav: 'AYT', konu: 'Çemberde Uzunluk' },
      { sinav: 'AYT', konu: 'Tork (Moment) ve Denge' },
      { sinav: 'AYT', konu: 'Elektrot Potansiyelleri' },
      { sinav: 'AYT', konu: 'Oksijenli Solunum' }),
    gun('Perşembe', '21 Mayıs', 2,
      { sinav: 'AYT', konu: 'Logaritmalı Eşitsizlikler' },
      { sinav: 'AYT', konu: 'Dairede Alan' },
      { sinav: 'AYT', konu: 'Akım Geçen Tele Manyetik Kuvvet' },
      { sinav: 'AYT', konu: 'Atom Modelleri' },
      { sinav: 'AYT', konu: 'Sindirim Sistemi' }),
    gun('Cuma', '22 Mayıs', 2,
      { sinav: 'AYT', konu: 'Maksimum-Minimum Problemleri' },
      { sinav: 'AYT', konu: 'Doğru Denklemleri' },
      { sinav: 'AYT', konu: 'Sığa (Kapasite)' },
      { sinav: 'AYT', konu: 'Çözeltilerin Özellikleri' },
      { sinav: 'AYT', konu: 'Lenf & Bağışıklık Sistemi' }),
  ],
};

export const programlar: Program[] = [efelerProgrami, nazilliProgrami];
