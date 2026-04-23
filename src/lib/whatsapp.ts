const NUMBER = import.meta.env.PUBLIC_WA_NUMBER ?? '905321314409';

const MESSAGES = {
  general:   'Merhaba, KNT Akademi hakkında bilgi almak istiyorum.',
  'q-vip':   'Merhaba, Q VIP programı hakkında bilgi almak istiyorum.',
  ozel:      'Merhaba, Özel Ders Başarı Kulübü hakkında bilgi almak istiyorum.',
  calisanlar:'Merhaba, Çalışanlar Kulübü hakkında bilgi almak istiyorum.',
  focus:     'Merhaba, FOCUS modeliniz hakkında bilgi almak istiyorum.',
  iletisim:  'Merhaba, KNT Akademi hakkında bilgi almak istiyorum.',
} as const;

export type WaContext = keyof typeof MESSAGES;

export function wa(ctx: WaContext = 'general'): string {
  return `https://wa.me/${NUMBER}?text=${encodeURIComponent(MESSAGES[ctx])}`;
}
