# 💌 Guide: How to Customize & Deploy Your Romantic Scrapbook

This guide will show you step-by-step how to insert your actual **photos**, **love letter**, **music**, **video**, and **messages**, and how to **publish the website online** for Anmol!

---

## 1. 🖼️ How to Upload Your Photographs

1. Open the folder:  
   `c:\Users\Nandi\Downloads\dayyy site\public\assets\photos\`
2. Place your photos inside this folder and name them:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - ... up to `photo20.jpg` (or as many as you have!)
3. To edit captions, open [`src/data/photos.js`](file:///c:/Users/Nandi/Downloads/dayyy%20site/src/data/photos.js):
   ```js
   {
     id: 1,
     src: "/assets/photos/photo1.jpg",
     caption: "Our first trip together ❤️",
     rotation: -3
   }
   ```

---

## 2. 📝 How to Edit Your Love Letter & All Text

All text on the website can be edited in **ONE single place**:  
👉 [`src/data/content.js`](file:///c:/Users/Nandi/Downloads/dayyy%20site/src/data/content.js)

Open that file to update:
- **`letter.body`**: Paste your full romantic love letter to Anmol here!
- **`surprise.text` & `surprise.revealedMessage`**: Your surprise postcard title & hidden secret.
- **`question.question`**: Write your special question (e.g. *"Will you be my Valentine forever?"*).
- **`yay.text`**: Your response when he clicks YES!
- **`collage.notes`**: Handwritten note cards for the collage.
- **`flowers.messages`**: Message cards for the bouquet page.
- **`final.message`**: Your closing message and signature.

---

## 3. 🎵 How to Add Your Special Song

1. Place your MP3 audio file at:  
   `c:\Users\Nandi\Downloads\dayyy site\public\assets\music.mp3`
2. Open [`src/data/content.js`](file:///c:/Users/Nandi/Downloads/dayyy%20site/src/data/content.js) and update the song title and artist under `music`:
   ```js
   music: {
     title: "Our Special Song",
     songTitle: "Perfect",
     artist: "Ed Sheeran"
   }
   ```

---

## 4. 🎥 How to Add Your YouTube Video

1. Open [`src/config.js`](file:///c:/Users/Nandi/Downloads/dayyy%20site/src/config.js).
2. Paste your YouTube URL into `VIDEO_URL`:
   ```js
   export const VIDEO_URL = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";
   ```

---

## 5. 🚀 How to Host / Publish the Website Online (Free)

To send Anmol a live link he can open on his phone or laptop:

### ⭐ Method A: Netlify Drop (Easiest & Fastest — 1 Minute)
1. Open your terminal in VS Code / Antigravity and run:
   ```bash
   npm run build
   ```
   *This creates a `dist` folder inside your project containing the compiled website.*
2. Go to **[Netlify Drop](https://app.netlify.com/drop)** in your web browser.
3. Drag and drop your `dist` folder directly onto the Netlify webpage!
4. Netlify will instantly generate a free live link (e.g. `https://nandini-for-anmol.netlify.app`)!

---

### ⭐ Method B: Vercel (CLI Command)
1. In your terminal, run:
   ```bash
   npx vercel
   ```
2. Follow the prompts (press Enter to accept defaults).
3. It will give you a live shareable URL instantly!

---

### ⭐ Method C: GitHub Pages
1. Push your code to a GitHub repository.
2. Go to **Repository Settings** > **Pages** > Select `dist` or `main` branch.
