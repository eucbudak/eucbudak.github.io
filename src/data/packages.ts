export type Pkg = {
  id:       string;
  slug:     string;
  name:     string;
  tagline:  string;
  forWho:   string;
  badge?:   string;
  features: string[];
  notFor:   string;
  waCtx:    'q-vip' | 'ozel' | 'calisanlar';
};

export const packages: Pkg[] = [
  {
    id:      'q-vip',
    slug:    '/paketler/q-vip',
    name:    'Q VIP',
    tagline: 'Full paket başarı sistemi',
    forWho:  'Sınıf anlatımı, özel ders ve tam sistem desteğini bir arada isteyen öğrenci',
    badge:   'En Kapsamlı',
    features: [
      '12 kişilik sınıflarda ders anlatımı',
      'Birebir özel ders seansları',
      'Bireysel koçluk programı',
      'Deneme sınavları — yayın seçimi serbest',
      'Kütüphane & çalışma alanı',
    ],
    notFor: 'Sınıf ortamı kesinlikle istemiyorum diyen öğrenci',
    waCtx: 'q-vip',
  },
  {
    id:      'ozel-ders',
    slug:    '/paketler/ozel-ders-basari-kulubu',
    name:    'Özel Ders Başarı Kulübü',
    tagline: 'Birebir + sistem, sınıf yok',
    forWho:  'Sınıf ortamı istemeyip birebir ve sistem desteği isteyen öğrenci',
    features: [
      'Birebir özel ders seansları',
      'Bireysel koçluk programı',
      'Deneme sınavları — yayın seçimi serbest',
      'Kütüphane & çalışma alanı',
    ],
    notFor: 'Toplu ders ortamından verim alan öğrenci',
    waCtx: 'ozel',
  },
  {
    id:      'calisanlar',
    slug:    '/paketler/calisanlar-kulubu',
    name:    'Çalışanlar Kulübü',
    tagline: 'Kendi hızında, sistem senin',
    forWho:  'Kendi başına çalışabilen ama yönlendirme ve ölçüm isteyen öğrenci',
    features: [
      'Bireysel koçluk programı',
      'Deneme sınavları — yayın seçimi serbest',
      'Kütüphane & çalışma alanı',
    ],
    notFor: 'Anlatım olmadan çalışamayacağını düşünen öğrenci',
    waCtx: 'calisanlar',
  },
];
