# Çan Tiyatrosu — Resmî Web Sitesi

Astro 7 + Tailwind CSS 4 ile geliştirilmiş, TinaCMS destekli, Cloudflare Workers üzerinde çalışan kurumsal tiyatro web sitesi.

---

# Kurulum

```bash
npm install
npm run dev
```

Geliştirme sunucusu:

- Site: http://localhost:4321
- TinaCMS: http://localhost:4321/admin/index.html

> Not: Geliştirme ortamında admin paneli `/admin/index.html` adresinden açılır.

Production build:

```bash
npm run build
```

Production önizleme:

```bash
npm run preview
```

---

# Proje Yapısı

```
src/
 ├── components/
 ├── layouts/
 ├── pages/
 ├── content/
 ├── lib/
 └── styles/

tina/
 ├── config.ts
 └── __generated__/

public/
 ├── images/
 └── admin/
```

---

# Mimari

- `src/content.config.ts` — İçerik koleksiyonları
- `src/content/plays/*.md` — Oyun içerikleri
- `src/components/` — Ortak bileşenler
- `src/layouts/Layout.astro` — Ana sayfa iskeleti
- `src/lib/site.ts` — Site ayarları
- `src/styles/global.css` — Tasarım sistemi
- `tina/config.ts` — TinaCMS yapılandırması

---

# Tasarım Sistemi

### Renkler

- Paper
- Ink
- Gold
- Curtain

### Tipografi

- Comfortaa
- Nunito Sans

---

# İçerik Yönetimi

Proje TinaCMS ile içerik yönetimini desteklemektedir.

Local geliştirme sırasında:

```
http://localhost:4321/admin/index.html
```

üzerinden içerikler düzenlenebilir.

Production ortamında Tina Cloud yapılandırılmadığı için admin paneli kullanılmaz.

---

# Build Süreci

```
npm run build
```

komutu şu işlemleri gerçekleştirir:

1. TinaCMS dosyalarını oluşturur.
2. Astro production build'ini oluşturur.

---

# Deployment

Site Cloudflare Workers üzerinde çalışmaktadır.

Astro yapılandırması:

```ts
output: "server"
```

Adapter:

```ts
@astrojs/node
```

Cloudflare Workers, Node compatibility modu ile çalıştırılmaktadır.

---

# Bilinen Durumlar

- Local ortamda TinaCMS paneli:

```
/admin/index.html
```

adresinden açılır.

- Production ortamında `/admin` sayfası Tina Cloud giriş ekranını gösterebilir.

- Production'da içerik düzenleme yapılmamaktadır.

---

# Teknolojiler

- Astro 7
- Tailwind CSS 4
- TinaCMS
- Cloudflare Workers
- Node Adapter

---

# Node Sürümü

Minimum:

```
Node.js 22
```