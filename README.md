# Professional Portfolio Website

A modern, responsive portfolio website built with React.js, TypeScript, and Tailwind CSS. Features a clean design with dark mode, multi-language support (English, German, Persian), smooth animations, and a fully customizable structure.

![Portfolio Preview](https://nnportfolio.netlify.app/)

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with professional styling
- **Fully Responsive**: Mobile-first design that works on all devices  
- **Dark Mode**: Complete dark mode implementation with localStorage persistence
- **Multi-Language Support**: Full internationalization with English, German, and Persian
- **Real Country Flags**: Professional flag icons for language selection
- **Smooth Animations**: Elegant hover effects and transitions
- **SEO Optimized**: Semantic HTML structure, meta tags, and dynamic lang attributes
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **TypeScript**: Type-safe development environment
- **Component-Based**: Modular, reusable React components
- **Certificate Showcase**: Professional certificates and achievements section
- **Project Portfolio**: Interactive project gallery with detailed views
- **Contact Form**: Functional contact form with validation and status messages

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18+ with TypeScript
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v6
- **Internationalization**: i18next, react-i18next, i18next-browser-languagedetector
- **Icons**: React Icons (Feather Icons, Ionicons)
- **Flag Icons**: react-country-flag for real flag display
- **Build Tool**: Vite
- **Development**: ESLint for code quality
- **Deployment**: Netlify with automatic builds

## 📁 Project Structure

```
myPortfolio/
├── public/                 # Static assets and locale files
│   └── locales/           # Translation files
│       ├── en/            # English translations
│       ├── de/            # German translations
│       └── fa/            # Persian translations
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Certificates.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Education.tsx
│   │   ├── Exprimence.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LanguageSelector.tsx
│   │   ├── Layout.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── Skills.tsx
│   ├── data/              # Portfolio content data
│   │   ├── certificates.ts
│   │   └── portfolio.ts
│   ├── locales/           # Source translation files
│   │   ├── en/
│   │   ├── de/
│   │   └── fa/
│   ├── pages/             # Page components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Projects.tsx
│   ├── assets/            # Images and static assets
│   │   └── images/
│   ├── scripts/           # Build scripts
│   │   └── copyLocales.js
│   ├── App.tsx            # Main application component
│   ├── i18n.ts            # Internationalization configuration
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and Tailwind directives
├── eslint.config.js       # ESLint configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <git@github.com:AnnaNajafiH/myPortfolio.git>
   cd myPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization Guide

### 1. Personal Information

Edit `src/data/portfolio.ts` to customize your personal information:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title", 
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  location: "Your City, Country"
};
```

### 2. Skills Section

Update the skills object in `portfolio.ts`:


## 🎨 Styling Customization

### Color Scheme

The portfolio uses a blue-based color scheme with dark mode support defined in `tailwind.config.js`:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb', // Main brand color  
        700: '#1d4ed8',
      }
    }
  }
}
```

### Dark Mode

Dark mode is fully implemented with:
- Automatic system preference detection
- Manual toggle in header
- localStorage persistence
- Smooth transitions between themes

### Custom Components

Key component classes defined in `src/index.css`:

```css
@layer components {
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .section-padding {
    @apply py-16 lg:py-20;
  }
  
  .gradient-text {
    @apply bg-gradient-to-r from-primary-500 to-blue-600 bg-clip-text text-transparent;
  }
}
```

### Typography

The portfolio uses Inter font from Google Fonts. To change fonts, update the import in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

## 🔧 Available Scripts

- `npm run dev` - Start development server (includes locale copying)
- `npm run build` - Build for production (includes locale copying)  
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Features Breakdown

### Certificate Showcase
- Professional certificate display with images
- Multi-language descriptions
- External links to verification
- Responsive grid layout

### Project Portfolio  
- Interactive project cards with hover effects
- Detailed project pages with routing
- Technology tags and live demo links
- Mobile-optimized layouts

### Contact Form
- Form validation with real-time feedback
- Success/error status messages  
- Simulated async submission
- Responsive design

### Language Selector
- Dropdown with real country flags
- Smooth language switching
- SEO-friendly implementation
- Mobile-responsive design

## 🌐 Deployment

### Netlify (Recommended)

The portfolio is optimized for Netlify deployment:

1. **Automatic Deployment**: Connect your GitHub repository
2. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Environment Variables**: None required for basic setup

Live Demo: [https://nnportfolio.netlify.app/](https://nnportfolio.netlify.app/)

### Manual Deployment Options

**Vercel:**
```bash
npm i -g vercel
vercel
```

**GitHub Pages:**
```bash
npm install --save-dev gh-pages
npm run build && npx gh-pages -d dist
```

### Build Optimization

The build process includes:
- Automatic locale file copying
- TypeScript compilation
- Tailwind CSS purging
- Asset optimization
- Bundle splitting

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: Single column layout, stacked components
- **Tablet**: Two-column layouts where appropriate
- **Desktop**: Full multi-column layouts with optimal spacing

Breakpoints:
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Focus indicators


## 🐛 Troubleshooting

### Common Issues

1. **Translation keys showing instead of text**
   - Ensure locale files are copied: `node scripts/copyLocales.js`
   - Check translation file structure matches component usage
   - Verify i18n configuration in `src/i18n.ts`

2. **Dark mode not persisting**
   - Check localStorage permissions in browser
   - Verify `Layout.tsx` dark mode logic

3. **Flags not displaying**
   - Ensure `react-country-flag` is installed: `npm install react-country-flag`
   - Check country codes in `LanguageSelector.tsx`

4. **Build errors with TypeScript**
   - Run `npm run build` to see all TypeScript errors
   - Check import paths and file extensions
   - Verify type definitions for new packages

5. **Tailwind styles not loading**
   - Ensure all paths in `tailwind.config.js` are correct  
   - Check that Tailwind directives are in `index.css`
   - Verify content patterns include all component files

### Performance Optimization

- **Image Optimization**: Use WebP format for better compression
- **Lazy Loading**: Implemented for project images
- **Code Splitting**: Automatic with Vite and React Router
- **Bundle Analysis**: Use `npm run build` to see bundle sizes


---

**Happy coding! 🚀**

# myPortfolio
# fende-pf
