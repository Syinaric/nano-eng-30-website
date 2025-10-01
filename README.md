# UW Nanotechnology Class of '30 Website

A modern, responsive website for the University of Waterloo Nanotechnology Engineering Class of 2030.

## Features

- **Modern Design**: Clean, glassmorphism-inspired design with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth scrolling, and animated statistics
- **Class Profile**: Information about the program, university, and graduation year
- **Discord Integration**: Easy access to the class Discord server
- **Background Image Support**: Ready for your University of Waterloo building image

## Setup Instructions

### 1. Add Background Image

1. Place your University of Waterloo building image in the `assets/` folder
2. Name the file `uw-building.jpg` (or update the CSS to match your filename)
3. Recommended image specifications:
   - Format: JPG, PNG, or WebP
   - Resolution: 1920x1080 or higher
   - File size: Under 2MB for optimal loading

### 2. Update Discord Link

1. Open `script.js` in a text editor
2. Find the Discord link section (around line 8)
3. Replace the prompt with your actual Discord server invite link:

```javascript
// Replace this line:
const discordUrl = prompt('Please enter your Discord server invite link:');

// With your actual Discord link:
const discordUrl = 'https://discord.gg/your-invite-link';
```

### 3. Customize Content

You can easily customize the website content by editing:

- **`index.html`**: Update text content, class information, and descriptions
- **`styles.css`**: Modify colors, fonts, and layout
- **`script.js`**: Add or modify interactive features

## File Structure

```
NE Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and layout
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   └── uw-building.jpg # Your background image (add this)
└── README.md           # This file
```

## Customization Options

### Colors
The website uses a modern color scheme with:
- Primary: `#64ffda` (teal accent)
- Background: Gradient from `#667eea` to `#764ba2`
- Discord: `#7289da` to `#5865f2`

### Fonts
- Primary: Inter (Google Fonts)
- Fallback: System fonts

### Animations
- Smooth hover effects on cards and buttons
- Typing animation for hero description
- Animated statistics counters
- Parallax scrolling effect

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Deployment

### Local Development
1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

### Web Hosting
Upload all files to your web hosting service. The website is static and doesn't require a server.

## Contributing

Feel free to customize this website for your class needs. Some ideas for enhancements:

- Add a photo gallery of class events
- Include a calendar of upcoming events
- Add links to course resources
- Create a contact form for class representatives

## License

This project is open source and available under the MIT License.

---

**Made with ❤️ for the UW Nanotechnology Class of 2030** 