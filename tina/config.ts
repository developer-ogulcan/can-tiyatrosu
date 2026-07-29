import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
    host: "127.0.0.1",
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
          { type: "string", name: "lede", label: "Lede" },
          {
            type: "object",
            name: "founders",
            label: "Founders",
            list: true,
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "bio", label: "Biography" },
            ],
          },
          { type: "string", name: "quote", label: "Quote" },
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
    ],
  },
});
