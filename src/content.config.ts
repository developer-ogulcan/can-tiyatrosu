import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const serviceDetails = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/service-details' }),
  schema: () =>
    z.object({
      title: z.string(),
      eyebrow: z.string().default('Hizmet'),
      lede: z.string(),
      gallery: z.array(z.string()).default([]),
      benefits: z
        .array(
          z.object({
            title: z.string(),
            description: z.string(),
          })
        )
        .default([]),
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .default([]),
      formConfig: z
        .object({
          formTitle: z.string().optional(),
          submitButtonText: z.string().optional(),
        })
        .optional(),
    }),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/settings' }),
  schema: () =>
    z.object({
      logo: z.string().optional(),
      phone: z.string(),
      email: z.string().email(),
      address: z.string(),
      mapsLink: z.string().url().optional(),
      ticketUrl: z.string(),
      instagram: z.string().url().optional(),
      facebook: z.string().url().optional(),
      youtube: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      copyright: z.string(),
      defaultTitle: z.string(),
      defaultDescription: z.string(),
      defaultOgImage: z.string(),
    }),
});

const homepage = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/homepage' }),
  schema: () =>
    z.object({
      heroEyebrow: z.string().optional(),
      heroTitleStart: z.string(),
      heroTitleHighlight: z.string().optional(),
      heroTitleEnd: z.string(),
      heroSubtitle: z.string(),
      heroButtons: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      audiencePaths: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          href: z.string(),
          cta: z.string(),
        })
      ).default([]),
      whyEyebrow: z.string().optional(),
      whyTitle: z.string(),
      whyItems: z.array(
        z.object({
          number: z.string(),
          title: z.string(),
          description: z.string(),
        })
      ).default([]),
      announcementsTitle: z.string().optional(),
      announcementsCtaLabel: z.string().optional(),
      announcementsCtaHref: z.string().optional(),
      ctaTitle: z.string(),
      ctaDescription: z.string(),
      ctaPrimaryLabel: z.string(),
      ctaPrimaryHref: z.string(),
      ctaSecondaryLabel: z.string().optional(),
      ctaSecondaryHref: z.string().optional(),
    }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/about' }),
  schema: () =>
    z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      lede: z.string(),
      missionTitle: z.string().optional(),
      missionBody: z.string().optional(),
      visionTitle: z.string().optional(),
      visionBody: z.string().optional(),
      values: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
      timeline: z.array(z.object({ perde: z.string(), year: z.string(), title: z.string(), description: z.string() })).default([]),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      awards: z.array(
        z.object({
          title: z.string(),
          year: z.string().optional(),
          description: z.string().optional(),
        })
      ).default([]),
    }),
});

const founders = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/founders' }),
  schema: () =>
    z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      lede: z.string(),
      founders: z.array(
        z.object({
          name: z.string(),
          title: z.string(),
          image: z.string().optional(),
          bio: z.string().optional(),
        })
      ).default([]),
      quote: z.string().optional(),
      quoteAttribution: z.string().optional(),
      quoteRole: z.string().optional(),
    }),
});

const academy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/academy' }),
  schema: () =>
    z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      lede: z.string(),
      description: z.string().optional(),
      features: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
      ctaTitle: z.string().optional(),
      ctaDescription: z.string().optional(),
      ctaButton: z.object({ label: z.string(), href: z.string() }).optional(),
    }),
});

const workshops = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/workshops' }),
  schema: () =>
    z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      lede: z.string(),
      description: z.string().optional(),
      workshops: z.array(z.object({ title: z.string(), age: z.string(), duration: z.string(), description: z.string() })).default([]),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
      ctaTitle: z.string().optional(),
      ctaDescription: z.string().optional(),
      ctaButton: z.object({ label: z.string(), href: z.string() }).optional(),
    }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/services' }),
  schema: () =>
    z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      lede: z.string(),
      description: z.string().optional(),
      services: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    }),
});

const contact = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/contact' }),
  schema: () =>
    z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      lede: z.string(),
      mapLabel: z.string().optional(),
      formTitle: z.string().optional(),
      formDescription: z.string().optional(),
    }),
});

const footer = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/footer' }),
  schema: () =>
    z.object({
      copyright: z.string(),
      links: z.array(z.object({ group: z.string(), items: z.array(z.object({ label: z.string(), href: z.string() })).default([]) })).default([]),
    }),
});

const seo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/seo' }),
  schema: () =>
    z.object({
      defaultTitle: z.string(),
      defaultDescription: z.string(),
      defaultOgImage: z.string(),
    }),
});

const tickets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/tickets' }),
  schema: () =>
    z.object({
      title: z.string(),
      category: z.string().optional(),
      genre: z.string().optional(),
      coverImage: z.string().optional(),
      eventDate: z.date().or(z.string().transform((val) => new Date(val))),
      venue: z.string().optional(),
      locationText: z.string().optional(),
      cast: z.string().optional(),
      creatives: z.string().optional(),
      ticketLinks: z
        .array(
          z.object({
            platformName: z.string().optional(),
            href: z.string().optional(),
            bgColor: z.string().optional(),
            textColor: z.string().optional(),
          })
        )
        .default([]),
    }),
});

const plays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/plays' }),
  schema: () =>
    z.object({
      title: z.string(),
      category: z.enum(['cocuk', 'yetiskin']),
      status: z.enum(['repertuvarda', 'yakinda', 'arsiv']).default('repertuvarda'),
      synopsis: z.string(),
      ageRange: z.string().optional(),
      duration: z.string().optional(),
      cast: z.array(z.string()).default([]),
      crew: z.array(z.object({ role: z.string(), name: z.string() })).default([]),
      heroImage: z.string().optional(),
      gallery: z.array(z.string()).default([]),
      order: z.number().default(0),
      featured: z.boolean().default(false),
    }),
});

const announcements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/announcements' }),
  schema: () =>
    z.object({
      title: z.string(),
      date: z.date().or(z.string().transform((val) => new Date(val))),
      summary: z.string(),
      content: z.string().optional(),
      image: z.string().optional(),
      featured: z.boolean().default(false),
      externalUrl: z.string().optional(),
    }),
});

export const collections = {
  settings,
  homepage,
  about,
  founders,
  academy,
  workshops,
  services,
  serviceDetails,
  contact,
  footer,
  seo,
  tickets,
  plays,
  announcements,
};