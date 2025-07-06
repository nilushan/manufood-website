# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for MaNu Food, a Sri Lankan food business in Yarrabilba, Queensland, built with Eleventy (11ty). The site features weekly menus, pickup information, ordering instructions, and a gallery of food items.

## Common Commands

### Development
- `npm run dev` - Start development server with hot-reloading (combines watch + serve)
- `npm run watch` - Run Eleventy in watch mode (rebuilds on file changes)
- `npm run serve` - Start Browser-Sync server on port 3000

### Build
- `npm run build` - Build static site to `_site` directory

## Architecture

### Build System
- **Static Site Generator**: Eleventy (11ty) with Nunjucks templating
- **Image Processing**: Uses `@11ty/eleventy-img` for responsive images with WebP/JPEG formats
- **Development Server**: Browser-Sync with live reload on `_site` directory changes

### Directory Structure
- `src/` - Source files
  - `_includes/layouts/` - Base layouts (base.njk, home.njk, etc.)
  - `_includes/partials/` - Reusable components (nav.njk, menu-items.njk, etc.)
  - `gallery/` - Gallery post markdown files
  - `ingredients/` - Ingredient information markdown files
  - `images/` - Source images (processed by eleventy-img)
  - `css/`, `js/`, `styles/` - Static assets
- `_site/` - Generated static site (output)

### Key Features
- **Menu System**: Dynamic menu display with categories (VEGETABLE, MEAT, SPECIALS)
- **Responsive Images**: Automatic image optimization with multiple sizes (300px, 600px, 900px)
- **Collections**: Eleventy collections for ingredients and gallery items
- **Custom Filters**: `filterByCategory` filter for menu categorization

### Configuration
- `.eleventy.js` - Main Eleventy configuration
- `bs-config.js` - Browser-Sync configuration
- Images are processed from `src/images/` to `_site/img/` with WebP and JPEG formats

### Content Management
- Menu items are defined in templates using data structures
- Gallery posts are markdown files in `src/gallery/`
- Ingredient information stored as markdown files in `src/ingredients/`
- Pickup dates and ordering information updated directly in templates