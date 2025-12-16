# Koin Web Application

## Overview

Koin is an academic collaboration platform designed to provide "a sanctioned space for smarter study." The application is a React-based single-page application (SPA) built with Vite, featuring a modern frontend stack with Tailwind CSS for styling. The platform appears to be a PWA-capable web application that connects to a Laravel backend API hosted on Render.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with Vite as the build tool and development server
- Uses JSX (not TypeScript) for component development
- React Router DOM v7 for client-side routing
- Framer Motion for animations and transitions

### Styling Architecture
- **Tailwind CSS** as the primary styling framework
- Custom brand color palette defined in `tailwind.config.js`:
  - Brand colors: Oxford Blue (#002147) and Koin Blue (#56C1E8)
  - Accent: Knowledge Gold (#FFC72C)
  - UI feedback colors for success, error, warning, and info states
- Path alias `@` configured to point to the `src` directory for cleaner imports

### API Communication
- **Axios** configured as the HTTP client
- Backend API endpoint: `https://koin-api.onrender.com/api`
- Credentials included with requests (`withCredentials: true`) indicating session-based or cookie-based authentication
- Laravel Echo configured for real-time WebSocket communication using Reverb/Pusher

### Component Library
- **Lucide React** for iconography
- **Recharts** for data visualization and charts

### PWA Support
- Web app manifest configured for standalone display mode
- App icons defined for 192x192 and 512x512 sizes
- Theme matches brand colors (Oxford Blue)

## External Dependencies

### Backend API
- Laravel-based REST API hosted on Render (`https://koin-api.onrender.com/api`)
- Handles authentication, data persistence, and business logic

### Real-time Communication
- Laravel Reverb (or Pusher-compatible) WebSocket server
- Configuration via environment variables:
  - `VITE_REVERB_APP_KEY`
  - `VITE_REVERB_HOST`
  - `VITE_REVERB_PORT`
  - `VITE_REVERB_SCHEME`

### Development Server
- Vite dev server configured on port 5000
- Bound to all network interfaces (`0.0.0.0`) for Replit compatibility