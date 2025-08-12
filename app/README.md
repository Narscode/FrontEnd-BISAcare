# BISAcare Mobile App

A React Native application for healthcare benefit claims and accessibility features.

## Android Setup and Development

### Prerequisites

Before running the app on Android, ensure you have the following installed:

1. **Node.js** (version 14 or higher)
2. **Java Development Kit (JDK)** (version 11 or higher)
3. **Android Studio** with Android SDK
4. **Android Emulator** or physical Android device

### Android Studio Setup

1. **Install Android Studio**
   - Download from [https://developer.android.com/studio](https://developer.android.com/studio)
   - Follow the installation wizard

2. **Configure Android SDK**
   - Open Android Studio
   - Go to `Tools > SDK Manager`
   - Install the following:
     - Android SDK Platform 31 (API Level 31)
     - Android SDK Build-Tools 31.0.0
     - Android Emulator
     - Android SDK Platform-Tools

3. **Set Environment Variables**
   ```bash
   export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/tools/bin
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

### Installation

1. **Clone and Navigate**
   ```bash
   cd app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Install iOS Dependencies (if on macOS)**
   ```bash
   cd ios && pod install && cd ..
   ```

### Running on Android

#### Option 1: Android Emulator

1. **Create Virtual Device**
   - Open Android Studio
   - Go to `Tools > AVD Manager`
   - Click "Create Virtual Device"
   - Choose a device (e.g., Pixel 5)
   - Select system image (API 31 recommended)
   - Click "Next" and "Finish"

2. **Start Emulator**
   ```bash
   npx react-native run-android
   ```

#### Option 2: Physical Android Device

1. **Enable Developer Options**
   - Go to Settings > About Phone
   - Tap "Build Number" 7 times
   - Go back to Settings > Developer Options
   - Enable "USB Debugging"

2. **Connect Device**
   ```bash
   adb devices  # Verify device is connected
   npx react-native run-android
   ```

### Development Commands

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run tests
npm test

# Lint code
npm run lint

# Clean build
cd android && ./gradlew clean && cd ..
```

### Troubleshooting

#### Common Issues

1. **Metro bundler issues**
   ```bash
   npx react-native start --reset-cache
   ```

2. **Android build errors**
   ```bash
   cd android && ./gradlew clean && cd ..
   npx react-native run-android
   ```

3. **Permission denied (gradlew)**
   ```bash
   chmod +x android/gradlew
   ```

4. **ANDROID_HOME not set**
   - Ensure environment variables are set correctly
   - Restart terminal/IDE after setting variables

#### Debug Mode

To run in debug mode:
```bash
npx react-native run-android --variant=debug
```

To create a release build:
```bash
cd android
./gradlew assembleRelease
```

### Project Structure

```
app/
├── src/
│   ├── components/          # Reusable UI components
│   ├── containers/          # Screen containers and providers
│   ├── hooks/              # Custom React hooks
├── android/                # Android-specific code
├── ios/                    # iOS-specific code (if applicable)
├── App.tsx                 # Main app component
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

### Features

- **Accessibility**: Voice mode, screen reader support, adjustable font sizes
- **Navigation**: Tab-based navigation with stack navigation for special flows
- **Components**: OCR input, speech-to-text, text-to-speech, smart forms
- **Containers**: Onboarding, check-in, symptom checker, claim management

### Accessibility Features

The app includes several accessibility features:
- Voice mode toggle
- Text-to-speech feedback
- Speech-to-text input
- Simple language explanations
- High contrast support
- Adjustable font sizes

### API Integration

This project is scaffolded with placeholder implementations for:
- OCR scanning functionality
- Text-to-speech services
- Speech-to-text services
- Claims processing APIs

Replace placeholder implementations with actual service integrations as needed.

## Contributing

1. Follow the existing code structure and naming conventions
2. Ensure all new components are properly typed with TypeScript
3. Test on both emulator and physical devices
4. Follow accessibility best practices