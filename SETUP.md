# EcoFootprint - Setup Guide

## Prerequisites
- Node.js 18+
- Expo CLI
- RevenueCat account

## Installation
```bash
cd ecofootprint
npm install
npx expo start
```

## RevenueCat Setup
1. Create products: `ecofootprint_premium_monthly` ($4.99), `ecofootprint_premium_annual` ($29.99)
2. Add API key to `.env`: `REVENUECAT_API_KEY=your_key`
3. Install: `npm install @revenuecat/purchases`

## App Store
- Bundle ID: com.ecofootprint.app
- Upload build via EAS

## Build
```bash
eas build --platform ios
```
