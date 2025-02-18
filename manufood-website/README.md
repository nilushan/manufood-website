# MaNu Foods Website

A modern website for MaNu Foods, featuring Sri Lankan home-cooked meals in Yarrabilba, QLD.

## Features

- Responsive design with mobile-friendly navigation
- Light/dark theme support with Sri Lankan cuisine-inspired colors
- Image galleries for food presentation
- Weekly menu display
- Order process information
- Location and contact details

## Project Structure

```
manufood-website/
├── src/
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk        # Base layout template
│   │   │   └── home.njk        # Home page layout
│   │   └── partials/
│   │       ├── nav.njk         # Navigation bar
│   │       └── footer.njk      # Footer with theme info
│   ├── images/                 # Image assets
│   │   ├── hero-food.jpg
│   │   └── weekly-menu.jpg
│   ├── js/
│   │   ├── nav.js             # Navigation functionality
│   │   └── theme.js           # Theme switcher
│   ├── styles/
│   │   └── main.css           # Main stylesheet
│   ├── index.njk              # Homepage
│   └── colors.md              # Color theme documentation
├── .eleventy.js               # Eleventy configuration
├── package.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd manufood-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run serve
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Color Theme

The website features a carefully crafted color scheme inspired by Sri Lankan cuisine:

### Light Theme - Turmeric & Spice
- Primary gradient: Turmeric gold (#FFA726 to #EF6C00)
- Background: Warm cream (#FFF8F0)
- Accents: Curry leaf green (#388E3C)

### Dark Theme - Spice Market Night
- Primary gradient: Evening spice (#FFB300 to #FB8C00)
- Background: Clay pot brown (#1A120B)
- Accents: Chili red (#EF5350)

## Customization

- Update content in `src/index.njk`
- Modify styles in `src/styles/main.css`
- Add images to `src/images/`
- Edit navigation in `src/_includes/partials/nav.njk`
- Adjust layouts in `src/_includes/layouts/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

