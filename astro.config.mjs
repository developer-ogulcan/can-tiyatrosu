// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://cantiyatrosu.com.tr",

  output: "server",
  
  // trailingSlash KALDIRILDI (Varsayılan 'ignore' moduna döndü, 404 hatası çözüldü)

  adapter: node({
    mode: "standalone",
  }),

  integrations: [
    sitemap()
  ],

  vite: {
    plugins: [
      tailwindcss()
    ],
    server: {
      proxy: {
        '/admin': {
          target: 'http://127.0.0.1:4002',
          changeOrigin: true,
          secure: false,
        },
      }
    }
  }
});