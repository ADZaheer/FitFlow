# FitFlow
Simple fitness tracking mobile app built with React Native and Expo.

## Preview
<p align="center">
  <img src="<img width="665" height="1378" alt="Screenshot 2026-09-29 192917" src="https://github.com/user-attachments/assets/d0e43166-4edb-4249-b390-2664dbc06b76" />
</p>

## Tech Stack
* Expo (SDK 52+)
* Expo Router (`app/` directory)
* NativeWind / Tailwind CSS
* Expo Vector Icons (Feather)
* TypeScript

## Current Progress / Setup Notes
* Initialized project with Expo Router and TypeScript.
* Configured NativeWind v4 with Metro (`metro.config.js` and `tailwind.config.js`).
* Fixed icon loading issue with `@expo/vector-icons`.
* Setup global styles via `global.css` inside root layout (`_layout.tsx`).
* Created initial login screen UI (`app/index.tsx`).

## Development History / What We Did
* **Project Generation:** Initialized the project (`npx create-expo-app fitflow`) and opted for local development (`npx expo start`) instead of cloud EAS builds to bypass Apple 2FA roadblocks.
* **UI Implementation:** Coded the initial Login screen in `src/app/index.tsx` based on the provided UI design, utilizing React Native components and state (`useState`).
* **Tailwind & NativeWind Setup:** Installed `nativewind` and `tailwindcss`, then generated and configured `tailwind.config.js` and `babel.config.js`.
* **Directory Troubleshooting:** Relocated `babel.config.js` out of the `scripts` folder into the project root so Expo could correctly parse it.
* **Routing Cleanup:** Stripped out the default Expo tabs template by deleting `explore.tsx` and updating `src/app/_layout.tsx` to render a clean `<Stack screenOptions={{ headerShown: false }} />`.
* **CSS & Metro Config:** Created `global.css` using standard `@import` Tailwind directives to clear IDE warnings, and set up `metro.config.js` to process NativeWind v4 styles.
* **Preset Fix:** Added `require("nativewind/preset")` to the `presets` array in `tailwind.config.js` to resolve a NativeWind preset crash upon server startup.
* **Cache Clearing:** Utilized `npx expo start -c` to aggressively clear the Metro bundler cache, successfully pushing the fully styled UI to the Expo Go app.

## Getting Started
Make sure you have Node.js installed.

Clone repo:
```bash
git clone [https://github.com/your-username/fitflow.git](https://github.com/your-username/fitflow.git)
cd fitflow![Uploading Screenshot 2026-09-29 192917.png…]()
