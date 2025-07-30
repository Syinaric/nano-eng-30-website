# Nano Eng '30 - University of Waterloo

A dark-themed, full-screen landing page for the Nanotechnology Engineering Class of 2030 at the University of Waterloo.

## Features

### Design
- **Dark Theme**: Pure black background with subtle dark overlays
- **Futuristic Typography**: Orbitron and Rajdhani fonts for tech-forward aesthetic
- **Full-Screen Layout**: 50/50 split with navigation buttons on the left and title on the right
- **Background Effects**: 
  - University of Waterloo campus image with dark overlay
  - Ken Burns parallax effect
  - Animated nano grid pattern
  - Subtle particle effects

### Interactive Elements
- **Navigation Buttons**: "Class Discord" and "Class Profile" with hover animations
- **Hover Effects**: Glow, scale, and underline animations
- **Mouse Trail**: Cyan particle trail following cursor movement
- **Particle System**: Animated particles around the nano icon

### Animations
- **Page Load**: Fade-in animations for all elements
- **Title Animation**: Typing effect and pulse animation
- **Button Hover**: Scale, glow, and underline effects
- **Background**: Ken Burns effect and moving grid
- **Loading Screen**: Branded loading animation

### Responsive Design
- **Desktop**: Full 50/50 split layout
- **Mobile**: Stacked vertical layout preserving all functionality
- **All Screen Sizes**: Maintains readability and visual impact

## File Structure

```
ne website/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript interactions and effects
└── README.md          # Project documentation
```

## Setup Instructions

1. **Clone or Download**: Get the project files
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **No Dependencies**: All fonts are loaded from Google Fonts CDN
4. **No Build Process**: Pure HTML, CSS, and JavaScript

## Customization

### Links
Update the Discord and Class Profile links in `index.html`:
```html
<a href="https://discord.gg/YOUR_INVITE_HERE" class="nav-button discord-button">
<a href="https://example.com/class-profile" class="nav-button profile-button">
```

### Colors
Modify the color scheme in `styles.css`:
- Primary text: `#FFFFFF` (white)
- Accent color: `#00FFFF` (cyan)
- Background: `#000000` (black)

### Background Image
Replace the background image URL in `styles.css`:
```css
background-image: url('YOUR_IMAGE_URL_HERE');
```

## Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile Browsers**: Full responsive support

## Performance Features

- **Optimized Animations**: Uses CSS transforms and opacity for smooth performance
- **Efficient Rendering**: Minimal DOM manipulation and optimized event handling
- **Responsive Images**: Background image scales appropriately for all devices

## Accessibility

- **Keyboard Navigation**: Enter/Space keys activate buttons
- **Screen Reader Friendly**: Proper semantic HTML structure
- **High Contrast**: White text on black background for maximum readability
- **Focus Indicators**: Clear visual feedback for interactive elements

## Credits

- **Fonts**: Google Fonts (Orbitron, Rajdhani)
- **Background Image**: Local QNC (Quantum Nano Centre) building image
- **Icons**: Custom SVG nano icon
- **Effects**: Custom CSS animations and JavaScript interactions

---

*Built for the Nanotechnology Engineering Class of 2030 at the University of Waterloo* 