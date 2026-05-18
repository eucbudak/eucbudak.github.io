// AUTO-GENERATED from 'MAYIS ÇALIŞMA TAKVİMİ.xlsx' on 2026-05-18.
// Kaynak Excel: 18–31 Mayıs 2026 arası lokasyon bazlı AÇIK / RESMİ TATİL KAPALI durumu.

export type Durum = 'A' | 'K'; // A = Açık, K = Resmî tatil / kapalı

export type TakvimGun = {
  gun:   number;        // ayın günü (18..31)
  hafta: string;        // kısa gün adı (Pzt, Sal, ...)
  haftaSonu: boolean;
};

export type TakvimSatir = {
  ad:        string;
  altBaslik?: string;   // ör. vardiya saatleri
  durum:     Durum[];   // gunler ile aynı sırada
};

export const TAKVIM_AY = 'Mayıs 2026';
export const TAKVIM_ARALIK = '18 – 31 Mayıs 2026';

export const gunler: TakvimGun[] = [
  { gun: 18, hafta: 'Pzt', haftaSonu: false },
  { gun: 19, hafta: 'Sal', haftaSonu: false },
  { gun: 20, hafta: 'Çar', haftaSonu: false },
  { gun: 21, hafta: 'Per', haftaSonu: false },
  { gun: 22, hafta: 'Cum', haftaSonu: false },
  { gun: 23, hafta: 'Cmt', haftaSonu: true  },
  { gun: 24, hafta: 'Paz', haftaSonu: true  },
  { gun: 25, hafta: 'Pzt', haftaSonu: false },
  { gun: 26, hafta: 'Sal', haftaSonu: false },
  { gun: 27, hafta: 'Çar', haftaSonu: false },
  { gun: 28, hafta: 'Per', haftaSonu: false },
  { gun: 29, hafta: 'Cum', haftaSonu: false },
  { gun: 30, hafta: 'Cmt', haftaSonu: true  },
  { gun: 31, hafta: 'Paz', haftaSonu: true  },
];

// Sıra: gunler ile birebir (18..31)
export const satirlar: TakvimSatir[] = [
  {
    ad: 'QWORK · Mimar Sinan',
    altBaslik: '09:00 – 19:00',
    durum: ['A','K','A','A','A','A','A','A','A','K','K','K','K','A'],
  },
  {
    ad: 'QWORK · Mimar Sinan',
    altBaslik: '19:00 – 23:00',
    durum: ['A','K','A','A','A','A','A','A','A','K','K','K','K','A'],
  },
  {
    ad: 'KNT Akademi Efeler',
    durum: ['A','K','A','A','A','A','A','A','K','K','K','K','K','K'],
  },
  {
    ad: 'KNT Akademi Nazilli',
    durum: ['A','K','A','A','A','A','A','A','K','K','K','K','K','A'],
  },
];
