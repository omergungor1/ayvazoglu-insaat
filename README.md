# Ayvazoğlu İnşaat - Web Sitesi

Bu proje, Ayvazoğlu İnşaat firması için modern ve responsive bir web sitesidir. Next.js 15, TypeScript, Tailwind CSS ve shadcn/ui kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: İnşaat sektörüne uygun, profesyonel tasarım
- **Responsive**: Mobil-first yaklaşımı ile tüm cihazlarda mükemmel görünüm
- **Hızlı Yükleme**: Static generation ile optimize edilmiş performans
- **SEO Dostu**: Meta etiketleri ve Open Graph desteği
- **İletişim Entegrasyonu**: Telefon ve WhatsApp direkt bağlantıları
- **Harita Entegrasyonu**: Google Maps ile konum gösterimi

## 📋 Sayfalar

- **Anasayfa**: Hero section, hizmetler, hakkımızda özeti
- **Hakkımızda**: Şirket bilgileri, değerler, istatistikler
- **Hizmetlerimiz**: Detaylı hizmet açıklamaları
- **Ürünler**: İnşaat malzemeleri kategorileri
- **Galeri**: Proje örnekleri ve fotoğraflar
- **Blog**: İnşaat sektörü makaleleri
- **Katalog**: PDF katalog indirme
- **İletişim**: İletişim formu ve bilgileri

## 🛠️ Teknolojiler

- **Next.js 15**: React framework
- **TypeScript**: Tip güvenliği
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern UI bileşenleri
- **Lucide React**: İkon kütüphanesi
- **Radix UI**: Erişilebilir UI primitives

## 📦 Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Kurulum Adımları

1. **Projeyi klonlayın:**
```bash
git clone <repository-url>
cd ayvazoglu-insaat
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 🏗️ Build ve Deploy

### Production Build

```bash
npm run build
```

### Static Export (CDN için)

Proje zaten static export için yapılandırılmıştır. Build sonrası `out` klasöründe statik dosyalar oluşur.

### Deploy

Statik dosyaları herhangi bir CDN veya hosting servisine yükleyebilirsiniz:
- Vercel
- Netlify
- AWS S3
- GitHub Pages

## 📱 Responsive Tasarım

- **Mobile First**: Önce mobil tasarım
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Mobil cihazlar için optimize edilmiş

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: Orange (600-700)
- **Secondary**: Gray (50-900)
- **Accent**: Orange (100-500)

### Tipografi
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

### Bileşenler
- Header (Navigation)
- Footer (İletişim bilgileri)
- Cards (İçerik kartları)
- Buttons (CTA butonları)
- Forms (İletişim formu)

## 📞 İletişim Bilgileri

- **Telefon**: +90 551 835 56 70
- **WhatsApp**: +90 551 835 56 70
- **Konum**: Bursa, Türkiye

## 🔧 Özelleştirme

### İçerik Güncelleme

1. **Metinler**: İlgili sayfa dosyalarında güncelleyin
2. **İletişim**: `src/components/Header.tsx` ve `src/components/Footer.tsx`
3. **Harita**: Google Maps embed kodunu güncelleyin

### Stil Değişiklikleri

1. **Renkler**: `tailwind.config.js` dosyasında
2. **Bileşenler**: `src/components/ui/` klasöründe
3. **Global Stiller**: `src/app/globals.css`

## 📄 Lisans

Bu proje özel kullanım için geliştirilmiştir.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 Destek

Herhangi bir sorun veya öneri için iletişime geçin:
- **Telefon**: +90 551 835 56 70
- **WhatsApp**: +90 551 835 56 70

---

**Ayvazoğlu İnşaat** - Bursa'da köklü inşaat firması
