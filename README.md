# GDG Galgotias Hacktoberfest 2025 🚀

A modern, cyberpunk-themed landing page for Google Developer Groups Galgotias University's Hacktoberfest 2025 event.

## 🌐 Live Demo

**[Visit Live Site](https://hacktoberfest-two.vercel.app/)**

## ✨ Features

- **Cyberpunk Design**: Modern UI with glitch effects, floating animations, and neon aesthetics
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive Elements**: Countdown timer, testimonials carousel, and dynamic animations
- **Registration System**: Firebase integration for participant registration
- **Interactive Map**: Leaflet.js powered location display with geolocation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Fast loading with optimized assets and animations

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0, Tailwind CSS 3.3.0
- **Database**: Firebase 12.3.0 (Firestore)
- **Maps**: React-Leaflet 4.2.1, Leaflet 1.9.4
- **Icons**: Lucide React 0.263.1
- **Build Tool**: Create React App
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
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

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. **Start the development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

### Firebase Setup

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard

2. **Enable Firestore Database**
   - In your Firebase project, go to "Firestore Database"
   - Click "Create database" and choose "Start in test mode"

3. **Get Firebase Configuration**
   - Go to Project Settings → General → Your apps
   - Click on the web app icon and copy the config object
   - Add these values to your `.env` file

4. **Configure Firestore Rules** (Optional for development)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /registrations/{document} {
      allow read, write: if true;
    }
  }
}
```

### Build for Production

```bash
# Create production build
npm run build

# Serve locally to test production build
npx serve -s build
```

## 📁 Project Structure

```
hacktoberfest/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── HeroPage.jsx          # Main landing page component
│   │   └── LocationPannel.jsx    # Interactive map component
│   ├── backend/
│   │   └── firebase.js           # Firebase configuration
│   ├── images/
│   │   └── hf-logo.png          # Event logo
│   ├── App.jsx                   # Root component
│   ├── index.css                 # Global styles
│   └── index.js                  # Entry point
├── package.json
├── tailwind.config.js
└── README.md
```

## 🔧 Available Scripts

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

## 🐛 Troubleshooting

### Common Issues

**1. Firebase Connection Issues**
```bash
# Verify environment variables are set correctly
echo $REACT_APP_FIREBASE_API_KEY

# Check Firebase rules allow read/write
# Ensure Firestore is enabled in Firebase Console
```

**2. Map Not Loading**
```bash
# Clear browser cache
# Check if OpenStreetMap tiles are accessible
# Verify Leaflet CSS is imported correctly
```

**3. Build Errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Update dependencies if needed
npm update
```

## 🎯 Event Details

- **Date**: October 25-27, 2025
- **Location**: Galgotias University, Greater Noida
- **Type**: 72-hour hackathon with workshops and networking
- **Registration**: Live Firebase integration
- **Capacity**: Open registration with real-time data storage

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Developer Groups** for the amazing community
- **Galgotias University** for hosting the event
- **Firebase** for backend services
- **Leaflet** for interactive maps
- **Tailwind CSS** for styling framework
- **Lucide React** for beautiful icons

---

*Built by Sneha Das for GDG Galgotias University Hacktoberfest 2025*
