# EcoFootprint

AI-powered sustainability tracker - carbon footprint calculation, eco-friendly recommendations.

## Features
- Track carbon footprint
- Log activities (transport, energy, food, shopping)
- Weekly/monthly insights
- Eco tips & achievements

## Tech Stack
- Expo SDK 54
- RevenueCat

## Getting Started
```bash
npm install
npx expo start
```

## API Configuration

This app uses **RevenueCat** for subscriptions. No external AI APIs required.

### Required .env Variables

```bash
# RevenueCat (for subscriptions - optional for basic functionality)
EXPO_PUBLIC_REVENUECAT_API_KEY=your_revenuecat_api_key
```

### Getting API Keys

1. **RevenueCat**:
   - Go to [RevenueCat](https://www.revenuecat.com)
   - Create project and get API key
   - Configure products in App Store Connect / Google Play Console

### Type Check & Build

```bash
# Install dependencies
npm install

# Type check
npx tsc --noEmit

# Start development server
npx expo start

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```
