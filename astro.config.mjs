// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://cantiyatrosu.com.tr",

  output: "server",

  adapter: cloudflare({
    mode: "directory",
  }),

  integrations: [
    sitemap(),
    AstroPWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Çan Tiyatrosu",
        short_name: "Çan Tiyatro",
        description: "Çan Tiyatrosu Resmi Mobil Uygulaması",
        theme_color: "#780016", // Sitenizin bordo/perde temasıyla uyumlu renk
        background_color: "#faf8f5",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/images/logo.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/images/logo.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{js,css,html,svg,png,jpg,jpeg,webp}"],
        globIgnores: [
          "**/admin/**",
          "**/images/theatre/**",
          "**/images/plays-images/**"
        ],
        maximumFileSizeToCacheInBytes: 20 * 1024 * 1024
      }
    })
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});