import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  
  // Local çalışmayı zorlayan hayati parametre
  contentApiUrlOverride: 'http://localhost:4002/graphql',

  build: {
    outputFolder: "admin",
    publicFolder: "public",
    host: "127.0.0.1",
    clientPath: "/admin",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        fields: [
          { type: "image", name: "logo", label: "Logo" },
          { type: "string", name: "phone", label: "Phone" },
          { type: "string", name: "email", label: "Email" },
          { type: "string", name: "address", label: "Address" },
          { type: "string", name: "mapsLink", label: "Google Maps Link" },
          { type: "string", name: "ticketUrl", label: "Ticket URL" },
          { type: "string", name: "instagram", label: "Instagram" },
          { type: "string", name: "facebook", label: "Facebook" },
          { type: "string", name: "youtube", label: "YouTube" },
          { type: "string", name: "linkedin", label: "LinkedIn" },
          { type: "string", name: "copyright", label: "Copyright" },
          { type: "string", name: "defaultTitle", label: "Default SEO Title" },
          { type: "string", name: "defaultDescription", label: "Default SEO Description" },
          { type: "image", name: "defaultOgImage", label: "Default OpenGraph Image" },
        ],
      },
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        ui: {
          router: () => "/",
        },
        fields: [
          { type: "string", name: "heroEyebrow", label: "Hero Eyebrow" },
          { type: "string", name: "heroTitleStart", label: "Hero Title Start" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroTitleEnd", label: "Hero Title End" },
          { type: "string", name: "heroSubtitle", label: "Hero Subtitle" },
          {
            type: "object",
            name: "heroButtons",
            label: "Hero Buttons",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Statistics",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
          {
            type: "object",
            name: "audiencePaths",
            label: "Audience Paths",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "href", label: "Link" },
              { type: "string", name: "cta", label: "Button Label" },
            ],
          },
          { type: "string", name: "whyEyebrow", label: "Why Section Eyebrow" },
          { type: "string", name: "whyTitle", label: "Why Section Title" },
          {
            type: "object",
            name: "whyItems",
            label: "Why Items",
            list: true,
            fields: [
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
          { type: "string", name: "announcementsTitle", label: "Announcements Section Title" },
          { type: "string", name: "announcementsCtaLabel", label: "Announcements CTA Label" },
          { type: "string", name: "announcementsCtaHref", label: "Announcements CTA Href" },
          { type: "string", name: "ctaTitle", label: "Bottom CTA Title" },
          { type: "string", name: "ctaDescription", label: "Bottom CTA Description" },
          { type: "string", name: "ctaPrimaryLabel", label: "Bottom CTA Primary Label" },
          { type: "string", name: "ctaPrimaryHref", label: "Bottom CTA Primary Href" },
          { type: "string", name: "ctaSecondaryLabel", label: "Bottom CTA Secondary Label" },
          { type: "string", name: "ctaSecondaryHref", label: "Bottom CTA Secondary Href" },
        ],
      },
      {
        name: "about",
        label: "About",
        path: "content/about",
        ui: {
          router: () => "/hakkimizda",
        },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "lede", label: "Lede" },
          { type: "string", name: "missionTitle", label: "Mission Title" },
          { type: "string", name: "missionBody", label: "Mission Body" },
          { type: "string", name: "visionTitle", label: "Vision Title" },
          { type: "string", name: "visionBody", label: "Vision Body" },
          {
            type: "object",
            name: "awards",
            label: "Ödüller ve Başarılar",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Ödül / Başarı Adı" },
              { type: "string", name: "year", label: "Yıl" },
              { type: "string", name: "description", label: "Açıklama" },
            ],
          },
          {
            type: "object",
            name: "values",
            label: "Values",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
          {
            type: "object",
            name: "timeline",
            label: "Timeline Entries",
            list: true,
            fields: [
              { type: "string", name: "perde", label: "Perde" },
              { type: "string", name: "year", label: "Year" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Statistics",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
        ],
      },
      {
        name: "founders",
        label: "Founders",
        path: "content/founders",
        ui: {
          router: () => "/kurucular",
        },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "title", label: "Title" },
          {
            type: "string",
            name: "lede",
            label: "Lede",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "founders",
            label: "Founders",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "title", label: "Title" },
              { type: "image", name: "image", label: "Fotoğraf" },
              {
                type: "string",
                name: "bio",
                label: "Biography",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "string",
            name: "quote",
            label: "Quote",
            ui: { component: "textarea" },
          },
          { type: "string", name: "quoteAttribution", label: "Quote Attribution" },
          { type: "string", name: "quoteRole", label: "Quote Role" },
        ],
      },
      {
        name: "academy",
        label: "Çan Akademi",
        path: "content/academy",
        ui: {
          router: () => "/can-akademi",
        },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "lede", label: "Lede" },
          { type: "string", name: "description", label: "Description" },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
          { type: "string", name: "ctaTitle", label: "CTA Title" },
          { type: "string", name: "ctaDescription", label: "CTA Description" },
          {
            type: "object",
            name: "ctaButton",
            label: "CTA Button",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Href" },
            ],
          },
        ],
      },
      {
        name: "workshops",
        label: "Workshops",
        path: "content/workshops",
        ui: {
          router: () => "/atolyeler",
        },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "lede", label: "Lede" },
          { type: "string", name: "description", label: "Description" },
          {
            type: "object",
            name: "workshops",
            label: "Workshops",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "age", label: "Age Range" },
              { type: "string", name: "duration", label: "Duration" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
          {
            type: "object",
            name: "faqs",
            label: "FAQs",
            list: true,
            fields: [
              { type: "string", name: "question", label: "Question" },
              { type: "string", name: "answer", label: "Answer" },
            ],
          },
          { type: "string", name: "ctaTitle", label: "CTA Title" },
          { type: "string", name: "ctaDescription", label: "CTA Description" },
          {
            type: "object",
            name: "ctaButton",
            label: "CTA Button",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Href" },
            ],
          },
        ],
      },
      {
        name: "services",
        label: "Services",
        path: "content/services",
        ui: {
          router: () => "/hizmetler",
        },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "lede", label: "Lede" },
          { type: "string", name: "description", label: "Description" },
          {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
        ],
      },
      {
        name: "serviceDetails",
        label: "Hizmet Detay Sayfaları",
        path: "content/service-details",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Başlık", isTitle: true, required: true },
          { type: "string", name: "eyebrow", label: "Üst Başlık (Eyebrow)" },
          { type: "string", name: "lede", label: "Özet / Giriş Metni", ui: { component: "textarea" } },
          {
            type: "image",
            name: "gallery",
            label: "Galeri Görselleri",
            list: true,
          },
          {
            type: "object",
            name: "benefits",
            label: "Avantajlar / Neden Bizimle Çalışmalısınız",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Başlık" },
              { type: "string", name: "description", label: "Açıklama", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "faq",
            label: "Sıkça Sorulan Sorular",
            list: true,
            fields: [
              { type: "string", name: "question", label: "Soru" },
              { type: "string", name: "answer", label: "Yanıt", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "formConfig",
            label: "Form Ayarları",
            fields: [
              { type: "string", name: "formTitle", label: "Form Başlığı" },
              { type: "string", name: "submitButtonText", label: "Gönder Buton Metni" },
            ],
          },
        ],
      },
      {
        name: "contact",
        label: "Contact",
        path: "content/contact",
        ui: {
          router: () => "/iletisim",
        },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "lede", label: "Lede" },
          { type: "string", name: "mapLabel", label: "Map Label" },
          { type: "string", name: "formTitle", label: "Form Title" },
          { type: "string", name: "formDescription", label: "Form Description" },
        ],
      },
      {
        name: "footer",
        label: "Footer",
        path: "content/footer",
        fields: [
          { type: "string", name: "copyright", label: "Copyright" },
          {
            type: "object",
            name: "links",
            label: "Footer Link Groups",
            list: true,
            fields: [
              { type: "string", name: "group", label: "Group" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "seo",
        label: "SEO",
        path: "content/seo",
        fields: [
          { type: "string", name: "defaultTitle", label: "Default Title" },
          { type: "string", name: "defaultDescription", label: "Default Description" },
          { type: "image", name: "defaultOgImage", label: "Default OpenGraph Image" },
        ],
      },
      {
        name: "tickets",
        label: "Bilet Etkinlikleri",
        path: "content/tickets",
        format: "md",
        ui: {
          router: () => "/bilet",
        },
        fields: [
          { type: "string", name: "title", label: "Etkinlik / Oyun Adı", isTitle: true, required: true },
          { type: "string", name: "category", label: "Kategori", options: ["Çocuk Oyunu", "Yetişkin Oyunu", "Akademi Sahnesi", "Özel Gösterim"] },
          { type: "string", name: "genre", label: "Tür", placeholder: "Müzikal Komedi, Dram, Yaratıcı Drama..." },
          { type: "image", name: "coverImage", label: "Kapak Görseli / Afiş" },
          { type: "datetime", name: "eventDate", label: "Tarih ve Saat", required: true },
          { type: "string", name: "venue", label: "Mekân / Sahne Adı", placeholder: "Çan Tiyatrosu Ana Sahne" },
          { type: "string", name: "locationText", label: "Açık Konum / İlçe", placeholder: "Kızılay / Ankara" },
          { type: "string", name: "cast", label: "Oyuncular / Kadro (Virgülle ayırın)", placeholder: "Ahmet Y., Ayşe K." },
          { type: "string", name: "creatives", label: "Künye (Yazar, Yönetmen)", placeholder: "Yazan: ... | Yöneten: ..." },
          {
            type: "object",
            name: "ticketLinks",
            label: "Bilet Satış Bağlantıları",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.platformName || "Yeni Bilet Butonu" }),
            },
            fields: [
              { type: "string", name: "platformName", label: "Platform Adı", placeholder: "BuBilet, Biletinial, Fırsatbufırsat..." },
              { type: "string", name: "href", label: "Bilet Satış Linki (URL)" },
              {
                type: "string",
                name: "bgColor",
                label: "Buton Arka Plan Rengi (Hex veya CSS rengi)",
                placeholder: "#e11d48 (Örn: Bubilet Kırmızı, #0284c7 Biletinial Mavi)",
              },
              {
                type: "string",
                name: "textColor",
                label: "Yazı Rengi",
                placeholder: "#ffffff",
                options: ["#ffffff", "#000000"],
              },
            ],
          },
        ],
      },
      {
        name: "plays",
        label: "Oyunlar",
        path: "content/plays",
        ui: {
          router: ({ document }) => `/oyunlar/${document._sys.filename}`,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Oyun Adı",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Kategori",
            options: [
              { label: "Çocuk Oyunu", value: "cocuk" },
              { label: "Yetişkin Oyunu", value: "yetiskin" },
            ],
          },
          {
            type: "string",
            name: "status",
            label: "Durum",
            options: [
              { label: "Repertuvarda", value: "repertuvarda" },
              { label: "Yakında", value: "yakinda" },
              { label: "Arşiv", value: "arsiv" },
            ],
          },
          {
            type: "string",
            name: "synopsis",
            label: "Kısa Açıklama",
            ui: { component: "textarea" },
          },
          { type: "string", name: "ageRange", label: "Yaş Aralığı" },
          { type: "string", name: "duration", label: "Süre" },
          { type: "image", name: "heroImage", label: "Kapak Görseli" },
          { type: "image", name: "gallery", label: "Galeri", list: true },
          { type: "boolean", name: "featured", label: "Öne Çıkan Oyun" },
          { type: "number", name: "order", label: "Sıralama" },
          { type: "string", name: "cast", label: "Oyuncular", list: true },
          
          {
            type: "object",
            name: "crew",
            label: "Künye",
            list: true,
            fields: [
              { type: "string", name: "role", label: "Görev" },
              { type: "string", name: "name", label: "İsim" },
            ],
          },
        ],
      },
      {
        name: "announcements",
        label: "Haberler ve Duyurular",
        path: "content/announcements",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Başlık",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Yayın Tarihi",
            required: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Özet Metin",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Görsel",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Ana Sayfada Öne Çıkar",
          },
          {
            type: "string",
            name: "externalUrl",
            label: "Harici Bağlantı (Varsa)",
          },
          {
            type: "string",
            name: "content",
            label: "Detay Metni",
            ui: { component: "textarea" },
          },
        ],
      },
      {
        name: "press",
        label: "Basında Biz",
        path: "content/press",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Haber Başlığı",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "sourceName",
            label: "Haber Kaynağı / Gazete Adı",
            placeholder: "Örn: Hürriyet, Milliyet, Tiyatro Gazetesi",
            required: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Yayınlanma Tarihi",
            required: true,
          },
          {
            type: "image",
            name: "coverImage",
            label: "Kapak Görseli",
            required: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Kısa Özet / Spot Metin",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "externalUrl",
            label: "Haberin Bağlantısı (URL)",
            required: true,
          },
        ],
      },
    ],
  },
});