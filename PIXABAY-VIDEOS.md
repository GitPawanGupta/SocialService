# Pixabay Video Options for Your Website 🎥

Aap hero section mein ye videos use kar sakte ho. Simple copy-paste!

## 🌟 Recommended Videos:

### 1. Social Media Theme - Digital Network
```html
<source src="https://cdn.pixabay.com/video/2022/12/07/142656-780173608_large.mp4" type="video/mp4">
```
- **Theme**: Digital connections, network
- **Color**: Blue, tech
- **Perfect for**: Social media services

### 2. Abstract Particles - Colorful
```html
<source src="https://cdn.pixabay.com/video/2023/02/20/151014-802075088_large.mp4" type="video/mp4">
```
- **Theme**: Colorful particles, modern
- **Color**: Multi-color
- **Perfect for**: Eye-catching background

### 3. Data Flow - Tech
```html
<source src="https://cdn.pixabay.com/video/2024/01/01/195455-901475537_large.mp4" type="video/mp4">
```
- **Theme**: Data streams, technology
- **Color**: Blue, cyan
- **Perfect for**: Premium tech look

### 4. Social Icons Animation
```html
<source src="https://cdn.pixabay.com/video/2022/11/29/141697-776937726_large.mp4" type="video/mp4">
```
- **Theme**: Social media icons
- **Color**: Colorful
- **Perfect for**: Direct social media theme

### 5. Neon Lights
```html
<source src="https://cdn.pixabay.com/video/2023/04/26/160351-821695890_large.mp4" type="video/mp4">
```
- **Theme**: Neon, glowing lines
- **Color**: Purple, pink, cyan
- **Perfect for**: Premium, modern look

### 6. Abstract Waves
```html
<source src="https://cdn.pixabay.com/video/2023/01/30/149239-795536862_large.mp4" type="video/mp4">
```
- **Theme**: Smooth waves, fluid
- **Color**: Blue gradient
- **Perfect for**: Calm, professional

## 📝 Kaise Use Karein?

1. **index.html** file open kare
2. Find this line:
   ```html
   <source src="https://cdn.pixabay.com/video/..." type="video/mp4">
   ```
3. Replace URL with your chosen video
4. Save aur refresh!

## ⚙️ Video Settings

### Opacity Adjust Karein
CSS mein opacity change kare (0.1 to 1.0):

```css
.hero-video-bg video {
    opacity: 0.3; /* Change this: 0.2 = lighter, 0.5 = darker */
}
```

### Video Speed Change
HTML mein playbackRate add kare:

```html
<video autoplay muted loop playsinline id="heroVideo">
    <source src="video-url.mp4" type="video/mp4">
</video>

<script>
document.getElementById('heroVideo').playbackRate = 0.75; // Slow motion
</script>
```

### Video Blur Effect
CSS mein blur add kare:

```css
.hero-video-bg video {
    opacity: 0.3;
    filter: blur(3px); /* Blur effect */
}
```

## 🎨 Best Practices:

1. ✅ **Opacity**: 0.2-0.4 (text readable rahega)
2. ✅ **File Size**: _large.mp4 use kare (better quality)
3. ✅ **Loop**: Always keep `loop` attribute
4. ✅ **Muted**: Keep `muted` for autoplay
5. ✅ **Mobile**: Lighter opacity on mobile

## 🔥 Pro Tips:

### Multiple Videos (Random)
```javascript
const videos = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4'
];
const randomVideo = videos[Math.floor(Math.random() * videos.length)];
document.querySelector('.hero-video-bg video source').src = randomVideo;
```

### Pause on Scroll
```javascript
window.addEventListener('scroll', () => {
    const video = document.querySelector('.hero-video-bg video');
    if (window.scrollY > 500) {
        video.pause();
    } else {
        video.play();
    }
});
```

## 📱 Mobile Optimization:

Mobile par video disable karne ke liye:

```css
@media (max-width: 768px) {
    .hero-video-bg video {
        display: none; /* Mobile par video hide */
    }
}
```

## 🌐 Alternative: YouTube Background

YouTube video use karna ho to:

```html
<div class="hero-video-bg">
    <iframe 
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&controls=0&playlist=VIDEO_ID"
        frameborder="0"
        allow="autoplay">
    </iframe>
</div>
```

---

**Enjoy your premium video background! 🎬✨**
