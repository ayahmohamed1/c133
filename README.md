# 🎁 Birthday Gift Website — Digital Product

A beautiful, shareable birthday gift website built with React + Vite.
Each customer gets a personalized link like `yourdomain.com/gift/aya`.

---

## 🚀 Quick Start (Local)

```bash
npm install
npm run dev
# Open: http://localhost:3000/gift/aya
```

---

## 📁 Project Structure

```
birthday-gift/
├── src/
│   ├── components/
│   │   ├── GiftClient.tsx  # Main interactive component
│   │   └── Image.tsx       # Image component
│   ├── pages/
│   │   ├── GiftPage.tsx    # Dynamic gift route (/gift/:id)
│   │   └── NotFound.tsx    # 404 page
│   ├── lib/
│   │   └── giftData.ts     # ⭐ EDIT HERE — all customer data
│   ├── App.tsx             # Routing & redirects
│   ├── globals.css         # All styles
│   └── main.tsx            # React entry point
├── index.html              # HTML shell & Google Fonts
└── public/
    ├── audio/              # Background music & songs
    └── images/             # ⭐ PUT IMAGES HERE
```

---

## ✏️ Adding a New Customer

### Step 1 — Add their images
Place their images in `/public/images/`:
- `envelope-sara.png` — the intro envelope image
- `birthday-sara.png` — the main birthday card image

### Step 2 — Edit `src/lib/giftData.ts`
```ts
sara: {
  name: "Sara",
  envelopeImage: "/images/envelope-sara.png",
  birthdayImage: "/images/birthday-sara.png",
  accentColor: "#f48fb1",   // optional: theme color
  musicUrl: "",              // optional: link to an .mp3 file
  message: `Your message here...`,
},
```

### Step 3 — Share the link
```
yourdomain.com/gift/sara
```

That's it! 🎉

---

## 🌐 Deploy to Vercel (Step-by-Step)

### Option A — GitHub + Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Convert to React"
   git remote add origin https://github.com/YOURUSERNAME/birthday-gift.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) → Log in
   - Click **"Add New Project"**
   - Import your GitHub repository
   - Framework: **Vite** (auto-detected)
   - Click **Deploy** ✅

3. **Your site is live!**
   - Vercel gives you a URL like `birthday-gift.vercel.app`
   - Each gift link works automatically: `/gift/aya`, `/gift/sara`, etc.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Custom Domain
1. In Vercel dashboard → Your project → **Settings → Domains**
2. Add your domain (e.g. `giftsbyname.com`)
3. Update your DNS records as instructed
4. Done! Links become: `giftsbyname.com/gift/aya`

---

## 🎵 Adding Background Music

1. Upload an `.mp3` file to `/public/music/birthday.mp3`
2. In `src/lib/giftData.ts`, set:
   ```ts
   musicUrl: "/music/birthday.mp3",
   ```
3. Or use an external URL:
   ```ts
   musicUrl: "https://example.com/song.mp3",
   ```

---

## 🎨 Customizing Colors

Each customer can have their own accent color:
```ts
accentColor: "#e8a87c",  // warm orange
accentColor: "#f48fb1",  // pink
accentColor: "#80cbc4",  // teal
```

---

## 📱 Mobile Support

The site is fully mobile-first and works perfectly on all devices.

---

## 💼 Business Tips

- **Charge per link**: Each `/gift/[id]` link is a product
- **Upsell music**: Offer a "with music" tier
- **Custom domains**: `giftsforher.com/gift/aya` feels premium
- **Easy to scale**: Just add entries to `src/lib/giftData.ts`

---

## 🛠 Tech Stack

- **React 18 + Vite**
- **React Router 6**
- **TypeScript**
- **Pure CSS** (no UI library)
- **Canvas API** (confetti)
- **Google Fonts** (Caveat + Nunito)
