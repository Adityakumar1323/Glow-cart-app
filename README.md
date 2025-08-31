# GlowCart 💄

GlowCart is a modern, cross-platform e-commerce mobile application for beauty products, built with React Native and Expo. It provides a seamless shopping experience, from browsing products to managing a shopping cart and user profile.

## ✨ Features

- **Authentication Flow**: Simple and elegant screens for Onboarding, Login, and Registration.
- **Product Discovery**: A clean home screen with a grid of products and a functional search bar.
- **Detailed Product View**: Users can tap on any product to see more details, including brand, price, description, and user reviews with star ratings.
- **Shopping Cart**: Fully functional cart system where users can add items, adjust quantities, and see the total price.
- **User Profile**: A dedicated screen for users to view their details and access app settings.
- **Bottom Tab Navigator**: A modern, easy-to-use tab bar for navigating between the main sections of the app.
- **Toast Notifications**: Non-intrusive pop-up messages for actions like adding an item to the cart.
- **Reusable Components**: The app is built on a set of reusable, themed components for a consistent and professional look and feel.

## 📸 Screenshots

*(You can add your own screenshots here. Upload them to your GitHub repository and replace the placeholder links.)*<img width="489" height="1088" alt="image" src="https://github.com/user-attachments/assets/c5fe7edf-0e1a-4b14-b04d-51711bb8c81d" />
Registerscreen

| Onboarding | Home Screen | Product Details | Profile |
| :---: | :---: | :---: | :---: |
| ![Onboarding Screen]<img width="489" height="1097" alt="image" src="https://github.com/user-attachments/assets/f9c81241-ed20-4270-85ae-a9e9c14a00b4" />

reenshot.<img width="600" height="1193" alt="Screenshot 2025-08-12 182421" src="https://github.com/user-attachments/assets/d98ac405-cee3-4a12-bcc5-b104fb25a9b9" />
png) | ![Product Details Screen](link-to-your-product-details-sc<img width="609" height="1199" alt="Screenshot 2025-08-12 182559" src="https://github.com/user-attachments/assets/9219e884-f09a-4d5a-b8b9-2df794042e15" />
reenshot.png) | ![Profile Screen](link-to-your-profile<img width="561" height="1199" alt="Screenshot 2025-08-12 182647" src="https://github.com/user-attachments/assets/1db4c772-cdce-4b25-8d40-ce62017602f8" />
-screenshot.png) |

## 📂 Folder Structure

The project is organized by feature type to keep the codebase clean and scalable.


GlowCart/
|
+--- assets/            # App icons, splash screens, and images
|
+--- src/
|    |--- components/    # Reusable UI components (Button, Header, etc.)
|    |--- context/       # Global state management (Cart, Products)
|    |--- screens/       # Top-level screen components
|    +--- utils/        # Utility functions (e.g., api.js)
|
+--- App.js             # Main app entry point and navigation setup
+--- package.json       # Project dependencies and scripts
...


## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

- **Node.js**: Make sure you have Node.js (LTS version) installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Expo Go App**: You will need the Expo Go app on your physical Android or iOS device, or an Android Emulator set up on your computer.

### Setup Instructions

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Adityakumar1323/Glow-cart-app.git](https://github.com/Adityakumar1323/Glow-cart-app.git)
    ```

2.  **Navigate to the project directory**
    ```bash
    cd Glow-cart-app
    ```

3.  **Install NPM packages**
    This will install all the necessary dependencies listed in `package.json`.
    ```bash
    npm install
    ```

4.  **Start the development server**
    This command will start the Metro bundler. The `-c` flag is recommended to clear the cache on first run.
    ```bash
    npx expo start -c
    ```

### Running the App

1.  **On a physical device**: Scan the QR code displayed in the terminal with the Expo Go app on your phone.
2.  **On an Android Emulator**: Press `a` in the terminal after the server has started.

## 🕒 Time Taken

- **Initial Setup & Component Library**: ~2 hours
- **Screen Development & Navigation**: ~3 hours
- **State Management & API Integration**: ~2 hours
- **Debugging & Refinements**: ~4 hours
- **Total Estimated Time**: ~11 hours

## 📝 Assumptions & Known Issues

- **API**: The app currently uses the `dummyjson.com` API for product data. This is a mock API, so the data is not real and will not persist.
- **Authentication**: The Login and Register screens are for UI purposes only and do not have a real authentication backend connected.
- **No Payment Gateway**: The checkout process is a placeholder and does not integrate with a real payment system.
- **Expo Go Version**: This project was built and tested with Expo SDK 51. Ensure you are using a compatible version of the Expo Go app on your device/emulator.

---
Made with ❤️ for a great shopping experience.
