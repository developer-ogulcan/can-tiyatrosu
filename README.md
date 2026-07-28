# Çan Tiyatrosu — Resmî Web Sitesi

Astro 7 + Tailwind CSS 4 ile inşa edilmiş, prodüksiyona hazır kurumsal tiyatro web sitesi.

## Kurulum

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ klasörüne production build
npm run preview   # production build'i yerelde önizle
```

## Mimari

- `src/content.config.ts` — İçerik koleksiyonları şeması: `plays`, `announcements`, `news`
- `src/content/plays/*.md` — Her oyun bir markdown dosyası. **Yeni oyun eklemek için kod değişikliği gerekmez**, sadece yeni bir `.md` dosyası ekleyin (şablon için mevcut dosyalara bakın).
- `src/components/` — Yeniden kullanılabilir bileşen kütüphanesi (Navbar, Footer, PlayCard, Timeline, Accordion, FormField, vb.)
- `src/layouts/Layout.astro` — Ortak sayfa iskeleti (SEO, fontlar, Navbar, Footer)
- `src/lib/site.ts` — Navigasyon yapısı, iletişim bilgileri ve site geneli sabitler
- `src/styles/global.css` — Tasarım tokenleri (renk, tipografi, gölge) — Tailwind 4 `@theme` ile tanımlı

## Tasarım Sistemi

- **Renkler:** Sıcak kağıt beyazı (`--color-paper`), mürekkep siyahı (`--color-ink`), antika altın (`--color-gold`), perde kırmızısı (`--color-curtain`)
- **Tipografi:** Başlıklar için Fraunces (serif), gövde metni için Work Sans
- **İmza öğesi:** "Perde" işareti (`PerdeMark.astro`) — çizilmiş bir perde kıvrımını temsil eden, bölümler arasında kullanılan ayraç

## İçerik Güncelleme

Tüm `[köşeli parantez]` içindeki metinler yer tutucudur ve gerçek kurumsal içerikle değiştirilmelidir. Hiçbir tarihsel bilgi uydurulmamıştır.

## Cloudflare Pages'e Dağıtım

- Build komutu: `npm run build`
- Çıktı klasörü: `dist`
- Node sürümü: 22+

Repo doğrudan Cloudflare Pages'e bağlanabilir; ek bir yapılandırma gerekmez.
