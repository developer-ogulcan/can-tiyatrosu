export const SITE = {
  name: 'Çan Tiyatrosu',
  founded: 1984,
  tagline: "Türkiye'nin Yaşayan En Eski Çocuk ve Gençlik Tiyatrosu",
  description:
    "1984’ten bu yana kesintisiz sahnede olan Çan Tiyatrosu; çocuk, gençlik ve yetişkin seyirci için oyunlar üreten, köklü bir tiyatro kuruluşudur.",

  url: 'https://cantiyatrosu.com',

  email: 'iletisim@cantiyatrosu.com',

  phone: '+90 541 914 04 84',

  address:
    'Sağlık Mahallesi, Süleyman Sırrı Caddesi No: 12 Daire: 5 ve 6 Sıhhiye / Ankara',

  hours: [
    {
      label: 'Pazartesi – Cuma',
      value: '10:00 – 18:00',
    },
    {
      label: 'Cumartesi',
      value: '10:00 – 14:00',
    },
    {
      label: 'Pazar',
      value: 'Gösteri günleri hariç kapalı',
    },
  ],

  social: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/cantiyatrosu/',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/cocuktiyatrosu/?locale=tr_TR',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@ÇanTiyatrosu-o1x',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/çan-tiyatrosu/about/?viewAsMember=true',
    },
  ],
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

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
  {
    label: 'Eğitim & Akademi',
    href: '/can-akademi',
    children: [
      { label: 'Çan Akademi', href: '/can-akademi' },
      { label: 'Atölyeler', href: '/atolyeler' },
    ],
  },
  {
    label: 'Hizmetler',
    href: '/hizmetler',
    children: [
      { label: 'Kurumsal Gösterimler', href: '/hizmetler/kurumsal-gosterimler' },
      { label: 'Animasyon ve Etkinlik', href: '/hizmetler/animasyon-ve-etkinlik' },
      { label: 'Maskot Kiralama', href: '/hizmetler/maskot-kiralama' },
    ],
  },
  {
    label: 'Hakkımızda',
    href: '/hakkimizda',
    children: [
      { label: 'Biz Kimiz?', href: '/hakkimizda' },
      { label: 'Kurucular', href: '/kurucular' },
      { label: 'Basın Kiti', href: '/basin/basin-kiti' },
      { label: 'Haberler ve Duyurular', href: '/basin/basinda-biz' },
    ],
  },
  {
    label: 'Katıl',
    href: '/basvurular',
    children: [
      { label: 'Ekip Başvurusu', href: '/basvurular/ekip-basvurusu' },
      { label: 'Çan Akademi Başvurusu', href: '/basvurular/can-akademi-basvurusu' },
      { label: 'Kurumsal Gösterim Talebi', href: '/basvurular/kurumsal-gosterim-talebi' },
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
    { label: 'Haberler ve Duyurular', href: '/basin/basinda-biz' },
  ],
  hizmet: [
    { label: 'Kurumsal Gösterimler', href: '/hizmetler/kurumsal-gosterimler' },
    { label: 'Animasyon ve Etkinlik', href: '/hizmetler/animasyon-ve-etkinlik' },
    { label: 'Maskot Kiralama', href: '/hizmetler/maskot-kiralama' },
  ],
};