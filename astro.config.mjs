// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";
// import tina from "@tinacms/astro/integration";
// import { tinaAdminDevRedirect } from "@tinacms/astro/vite";

export default defineConfig({
  site: "https://cantiyatrosu.com",

  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  integrations: [
    sitemap(),
    // tina(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
      // tinaAdminDevRedirect(),
    ],
    // ssr: {
    //   noExternal: [
    //     "@tinacms/astro",
    //     "@tinacms/bridge",
    //   ],
    // },
  },
});