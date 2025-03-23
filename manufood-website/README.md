# MaNu Food Website

A website for MaNu Food, offering authentic Sri Lankan home-cooked meals in Yarrabilba, Queensland, Australia.

## Description

This project is a website built with Eleventy (11ty) for a local Sri Lankan food business. It features:

- Weekly updated menus
- Pickup information
- Ordering instructions
- Gallery of food items

## Technology Stack

- **Framework**: [Eleventy (11ty)](https://www.11ty.dev/) - a simpler static site generator
- **Templating**: Nunjucks templates (.njk)
- **CSS**: Custom styling
- **Image Processing**: Eleventy Image plugin

## Project Structure

- `src/index.njk`: Main homepage with menu and ordering information
- `src/_includes/`: Layout templates and partials
  - `partials/menu-items.njk`: Menu item rendering template
  - `partials/gallery-grid.njk`: Gallery display template

## Features

### Menu System

The site features a dynamic menu system that displays items categorized as:
- VEGETABLE (Dhal curry, Passion fruit leave mallum, etc.)
- MEAT (Beef with potato curry, Prawns temp, etc.)
- SPECIALS (Kottu beef, Mixed fried rice, etc.)

### Next Pickup Information

Prominently displays the next pickup date, location, and ordering deadline:
- Location: Parks Estate, Yarrabilba, QLD
- Current pickup date: 29th March 2025
- Order deadline: 26th March 2025
- Pickup time: After 3:00 PM

### Ordering Process

Clear 4-step ordering instructions:
1. Browse the weekly menu
2. Place order via SMS to Juliya (0416019891)
3. Pick up food on Saturday after 3:00 PM
4. Enjoy the authentic Sri Lankan meal

## Development

### Prerequisites

- Node.js (latest LTS version recommended)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Development Server

```
npm run dev
```

This starts a development server with hot-reloading using Browser-Sync.

### Building for Production

```
npm run build
```

This generates the static site in the `_site` directory.

## License

ISC