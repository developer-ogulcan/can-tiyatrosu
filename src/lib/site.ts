export const SITE = {
  name: 'Çan Tiyatrosu',
  founded: 1984,
  tagline: "Türkiye'nin Yaşayan En Eski Çocuk ve Gençlik Tiyatrosu",
  description:
    '1984\u2019ten bu yana kesintisiz sahnede olan Çan Tiyatrosu; çocuk, gençlik ve yetişkin seyirci için üretim yapan, eğitim ve kurumsal projeler yürüten bir sahne sanatları kuruluşudur.',
  url: 'https://cantiyatrosu.com',
  email: 'iletisim@cantiyatrosu.com',
  phone: '+90 (312) 000 00 00',
  address: '[Açık adres buraya eklenecektir], Ankara, Türkiye',
  hours: [
    { label: 'Pazartesi – Cuma', value: '10:00 – 18:00' },
    { label: 'Cumartesi', value: '10:00 – 14:00' },
    { label: 'Pazar', value: 'Gösteri günleri hariç kapalı' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'YouTube', href: 'https://youtube.com/' },
    { label: 'Facebook', href: 'https://facebook.com/' },
  ],
};

export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Kurumsal',
    href: '/kurumsal',
    children: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Kurucular', href: '/kurucular' },
      { label: 'Basında Çan', href: '/basin/basinda-biz' },
    ],
  },
  {
    label: 'Oyunlar',
    href: '/performanslar',
    children: [
      { label: 'Çocuk Oyunları', href: '/performanslar/cocuk-oyunlari' },
      { label: 'Yetişkin Oyunları', href: '/performanslar/yetiskin-oyunlari' },
    ],
  },
  {
    label: 'Hizmetler',
    href: '/hizmetler',
    children: [
      { label: 'Sahne Gösterileri', href: '/hizmetler/kurumsal-gosterimler' },
      { label: 'Animasyon', href: '/hizmetler/animasyon-etkinlik' },
      { label: 'Maskot Kiralama', href: '/hizmetler/maskot-kiralama' },
    ],
  },
  { label: 'Çan Akademi', href: '/basvurular/can-akademi' },
  { label: 'Atölyeler', href: '/atolyeler' },
  {
    label: 'Başvurular',
    href: '/basvurular',
    children: [
      { label: 'Ekip Başvurusu', href: '/basvurular/ekip-basvurusu' },
      { label: 'Gösteri Talebi', href: '/basvurular/kurumsal-gosterim-talebi' },
    ],
  },
  { label: 'Duyurular', href: '/duyurular' },
  { label: 'İletişim', href: '/iletisim' },
];

export const FOOTER_LINKS = {
  kurum: [
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Kurucular', href: '/kurucular' },
    { label: 'Basın Kiti', href: '/basin/basin-kiti' },
    { label: 'Basında Çan Tiyatrosu', href: '/basin/basinda-biz' },
  ],
  sahne: [
    { label: 'Çocuk Oyunları', href: '/performanslar/cocuk-oyunlari' },
    { label: 'Yetişkin Oyunları', href: '/performanslar/yetiskin-oyunlari' },
  ],
  hizmet: [
    { label: 'Kurumsal Gösterimler', href: '/hizmetler/kurumsal-gosterimler' },
    { label: 'Animasyon ve Etkinlik', href: '/hizmetler/animasyon-etkinlik' },
    { label: 'Maskot Kiralama', href: '/hizmetler/maskot-kiralama' },
  ],
  basvuru: [
    { label: 'Kurumsal Gösterim Talebi', href: '/basvurular/kurumsal-gosterim-talebi' },
    { label: 'Çan Akademi', href: '/basvurular/can-akademi' },
    { label: 'Oyunculuk Başvurusu', href: '/basvurular/oyunculuk-basvurusu' },
  ],
};
