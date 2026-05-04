# Birthday Gift Website

Website birthday gift satu halaman untuk Pricill, dibuat dengan React, Vite, Tailwind CSS, Framer Motion, Lucide React, dan Canvas Confetti.

## Cara Install

```bash
npm install
```

## Cara Menjalankan

```bash
npm run dev
```

## Cara Build

```bash
npm run build
```

## Cara Preview Build

```bash
npm run preview
```

## Cara Mengganti Foto

Letakkan foto kenangan untuk background di `src/assets/images`. Foto di folder ini otomatis dipakai sebagai background memory dengan frame paper.

Untuk gallery utama `Moments With You`, update array `galleryPhotos` di `src/App.jsx`.

Foto khusus gallery bisa diletakkan di `src/assets/images/gallery` dengan nama `gallery-01.jpeg` sampai `gallery-06.jpeg`.

## Cara Mengganti Video

Letakkan video di `src/assets/videos`, lalu update bagian `VideoMessage` atau gunakan nama file `birthday-video.mp4` supaya otomatis terbaca.

## Cara Mengganti Musik

Letakkan file musik legal milikmu di `src/assets/music/love-wave-to-earth.mp3`. Project juga masih menerima `src/assets/music/birthday-song.mp3` sebagai fallback.

## Cara Deploy ke Vercel

1. Push project ke GitHub.
2. Buka Vercel.
3. Import repository.
4. Klik Deploy.
