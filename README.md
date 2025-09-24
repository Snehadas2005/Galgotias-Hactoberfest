# GDG Galgotias Hacktoberfest 2025

A modern, responsive landing page for Google Developer Groups, Galgotias University's Hacktoberfest 2025 event.

## Live Demo

**[Visit Live Site](https://hacktoberfest-two.vercel.app/)**

## Features

- **Modern UI**: Clean design with dark/light mode toggle
- **Interactive Elements**: Countdown timer, testimonials carousel, and smooth animations
- **Registration System**: Form handling with validation
- **Interactive Map**: Location display with geolocation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Fast loading with optimized assets

## Tech Stack

- **Frontend**: React 18.2.0, Tailwind CSS 3.3.0
- **Maps**: React-Leaflet 4.2.1, Leaflet 1.9.4
- **Icons**: Lucide React 0.263.1
- **Build Tool**: Create React App
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/galgotias-hacktoberfest-2025.git
cd galgotias-hacktoberfest-2025
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Serve locally to test production build
npx serve -s build
```

## Project Structure

```
hacktoberfest/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── HeroPage.jsx          # Main landing page component
│   │   └── LocationPannel.jsx    # Interactive map component
│   ├── images/
│   │   └── hf-logo.png          # Event logo
│   ├── App.jsx                   # Root component
│   ├── index.css                 # Global styles
│   └── index.js                  # Entry point
├── package.json
├── tailwind.config.js
└── README.md
```

## Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (irreversible)
npm run eject
```

## Event Details

- **Date**: October 25-27, 2025
- **Location**: Galgotias University, Greater Noida
- **Type**: 72-hour hackathon with workshops and networking
- **Registration**: Open registration with form validation

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

*Built for GDG Galgotias University Hacktoberfest 2025*
