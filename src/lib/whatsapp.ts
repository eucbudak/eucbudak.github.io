const NUMBER = import.meta.env.PUBLIC_WA_NUMBER ?? '905321314409';

// Nazilli şubesi numarası (0544 141 09 09) — Nazilli'ye özel programlar bu hatta düşer.
const NAZILLI_NUMBER = '905441410909';

const MESSAGES = {
  general:   'Merhaba, KNT Akademi hakkında bilgi almak istiyorum.',
  'q-vip':   'Merhaba, Q VIP programı hakkında bilgi almak istiyorum.',
  ozel:      'Merhaba, Özel Ders Başarı Kulübü hakkında bilgi almak istiyorum.',
  calisanlar:'Merhaba, Çalışanlar Kulübü hakkında bilgi almak istiyorum.',
  focus:     'Merhaba, FOCUS modeliniz hakkında bilgi almak istiyorum.',
  iletisim:  'Merhaba, KNT Akademi hakkında bilgi almak istiyorum.',
  'lgs-master': 'Merhaba, LGS Master Yaz Programı hakkında bilgi almak ve ücretsiz kayıt yaptırmak istiyorum. (8. sınıfa geçecek öğrenci için)',
  'tyt-master': 'Merhaba, TYT Master Yaz Programı hakkında bilgi almak ve ön kayıt oluşturmak istiyorum.',
} as const;

export type WaContext = keyof typeof MESSAGES;

// Bu bağlamlar Nazilli hattına yönlenir.
const NAZILLI_CONTEXTS = new Set<WaContext>(['lgs-master']);

export function wa(ctx: WaContext = 'general'): string {
  const num = NAZILLI_CONTEXTS.has(ctx) ? NAZILLI_NUMBER : NUMBER;
  return `https://wa.me/${num}?text=${encodeURIComponent(MESSAGES[ctx])}`;
}
