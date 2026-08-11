// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare"; // <- Node yerine Cloudflare içe aktarıldı
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  site: "https://cantiyatrosu.com.tr",

  output: "server",

  adapter: cloudflare({
    imageService: "cloudflare",
  }),

  integrations: [
    sitemap()
  ],

  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: "autoUpdate",
        manifest: {
          name: "Çan Tiyatrosu",
          short_name: "Çan Tiyatro",
          theme_color: "#000000",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png"
            }
          ]
        }
      })
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