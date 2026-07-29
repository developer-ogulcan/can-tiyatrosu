export const SITE = {
  name: 'Çan Tiyatrosu',
  founded: 1984,
  tagline: "Türkiye'nin Yaşayan En Eski Çocuk ve Gençlik Tiyatrosu",
  description:
    '1984\u2019ten bu yana kesintisiz sahnede olan Çan Tiyatrosu; çocuk, gençlik ve yetişkin seyirci için oyunlar üreten, ekip ve gönüllülerle büyüyen bir tiyatro kuruluşudur.',
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

/** Seyirci ve topluluk odaklı navigasyon — kurumsal satış ön planda değil */
export const NAV: NavItem[] = [
  { label: 'Anasayfa', href: '/' },
  {
    label: 'Oyunlar',
    href: '/performanslar',
    children: [
      { label: 'Tüm Oyunlar', href: '/performanslar' },
      { label: 'Çocuk Oyunları', href: '/performanslar/cocuk-oyunlari' },
      { label: 'Yetişkin Oyunları', href: '/performanslar/yetiskin-oyunlari' },
    ],
  },
  { label: 'Bilet', href: '/bilet' },
  { label: 'Çan Akademi', href: '/can-akademi' },
  { label: 'Atölyeler', href: '/atolyeler' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Kurucular', href: '/kurucular' },
  {
    label: 'Katıl',
    href: '/basvurular',
    children: [
      { label: 'Ekip Başvurusu', href: '/basvurular/ekip-basvurusu' },
      { label: 'Çan Akademi Başvurusu', href: '/basvurular/can-akademi-basvurusu' },
      { label: 'Kurumsal Gösterim Talebi', href: '/basvurular/kurumsal-gosterim-talebi' },
    ],
  },
  {
    label: 'Hizmetler',
    href: '/hizmetler',
    children: [
      { label: 'Kurumsal Gösterimler', href: '/hizmetler/kurumsal-gosterimler' },
      { label: 'Animasyon ve Etkinlik', href: '/hizmetler/animasyon-etkinlik' },
      { label: 'Maskot Kiralama', href: '/hizmetler/maskot-kiralama' },
    ],
  },
  {
    label: 'Basın',
    href: '/basin/basin-kiti',
    children: [
      { label: 'Basın Kiti', href: '/basin/basin-kiti' },
      { label: 'Basında Çan Tiyatrosu', href: '/basin/basinda-biz' },
    ],
  },
  { label: 'İletişim', href: '/iletisim' },
];

export const FOOTER_LINKS = {
  seyirci: [
    { label: 'Oyunlar', href: '/performanslar' },
    { label: 'Bilet Al', href: '/bilet' },
    { label: 'Çocuk Oyunları', href: '/performanslar/cocuk-oyunlari' },
    { label: 'Yetişkin Oyunları', href: '/performanslar/yetiskin-oyunlari' },
  ],
  katil: [
    { label: 'Ekip Başvurusu', href: '/basvurular/ekip-basvurusu' },
    { label: 'Çan Akademi', href: '/can-akademi' },
    { label: 'Atölyeler', href: '/atolyeler' },
  ],
  kurum: [
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Kurucular', href: '/kurucular' },
    { label: 'Basın Kiti', href: '/basin/basin-kiti' },
    { label: 'Basında Çan Tiyatrosu', href: '/basin/basinda-biz' },
  ],
  hizmet: [
    { label: 'Kurumsal Gösterimler', href: '/hizmetler/kurumsal-gosterimler' },
    { label: 'Animasyon ve Etkinlik', href: '/hizmetler/animasyon-etkinlik' },
    { label: 'Maskot Kiralama', href: '/hizmetler/maskot-kiralama' },
  ],
};
