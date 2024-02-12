# Meal Roulette App

The Meal Roulette App is a mobile application designed to provide users with a delightful and convenient way to explore a variety of meals for different occasions. Whether you're looking for quick weeknight recipes or planning a special dinner, this app has you covered.

<div align="center">
  <img src="https://github.com/ffc1e12/data4-life-meal-roulette-app-mobile-h50jf-94a9ih/assets/22340454/0a11974c-b568-4271-bc19-a19ab6d2c4c7" alt="meal roulette" width="300"/>
</div>

- [Features](#Features)
- [Tech Stack](#Tech-Stack)
- [Navigation](#Navigation)
- [Dark Theme](#Dark-Theme)
- [Theme Restructure](#Theme-Restructure)
- [Responsiveness](#Responsiveness)
- [Data Fetching](#Data-Fetching)
- [Testing](#Testing)
- [Responsiveness](#Responsiveness)

## Installation
`App is using expo`
1. Clone the repository
2. Install dependencies
```bash
npm install
```
4. Start the app e.g with android device
```bash
 expo start --android
```

## Features
- `Meal Roulette`: Shake up your meal planning routine by discovering random meals with a simple roulette feature.
- `Meal Details`: Explore detailed information about each meal, including a captivating picture, description, and ingredients.
- `Settings`: Section is ready to be customized.

## Tech Stack
- `React Native`: The app is built using React Native, providing a cross-platform solution for both iOS and Android devices.
- `Expo`: The app leverages Expo for a simplified development workflow, including tools for building, testing, and deploying React Native applications.
- `Android Studio`: Android Studio is used for Android development, ensuring compatibility and optimal performance on Android devices.

## Navigation
#### Bottom Tab & Stack Navigation
The app utilizes `Bottom Tab Navigation` for seamless navigation between key sections. 
Each tab features an icon for quick identification, creating an intuitive user experience.
In addition, `Stack Navigation` organizes screens hierarchically, allowing users to navigate through various sections logically. This includes smooth transition animations and back navigation for enhanced usability.
Both navigation styles are impleme
nted using `React Navigation`, ensuring a cohesive and user-friendly journey through the app.

## Dark Theme
The Dark Theme enhances readability and usability, providing a modern and elegant aesthetic.

## Theme Restructure
Introducing a flexible theming system for personalized app appearance. Easily customizable for a tailored user interface, supporting existing themes and future options.

## Data Fetching
The app employs `Axios`, a powerful HTTP client, for efficient communication with the backend API. Axios simplifies the process of fetching data, ensuring a smooth and responsive user experience.

## Testing
The app's core functionality is thoroughly tested using `Jest` in conjunction with `@testing-library/react-native`. The testing suite includes tests for crucial hooks that power the application's data fetching and management.

#### test of `useMeals`
```bash
npm test hooks/__tests__/useMeals.test.tsx
```
- The useMeals hook is responsible for fetching and managing meal data, ensuring a seamless user experience. Jest is used to mock the fetchMeals API call, allowing for controlled testing of the hook's behavior. The test verifies that the hook correctly sets loading states, fetches meals data, and handles errors, contributing to the reliability of the app's core functionality.

#### test of `useSingleMeal`
```bash
npm test hooks/__tests__/useSingleMeal.test.tsx
```
- The useSingleMeal hook focuses on handling the data for a single meal. Similar to the useMeals hook, Jest is utilized to mock the fetchSingleMeal API call. The test for this hook ensures that loading states are managed appropriately, meal data is fetched accurately, and error handling is effective, providing a robust foundation for displaying individual meal details.

![Screenshot 2024-02-02 at 11 03 28](https://github.com/ffc1e12/data4-life-meal-roulette-app-mobile-h50jf-94a9ih/assets/22340454/d2307a7b-0b7c-4b7d-8606-7542e65c6ab8)

## Responsiveness
`Percentage-Based Layouts:` Utilizing percentage-based layouts allows dynamic adjustment of component sizes, ensuring a visually pleasing and functional layout on devices of varying dimensions.
By integrating responsive design principles and harnessing React Native's capabilities, the app provides a flexible and user-friendly interface, catering to diverse devices and screen resolutions.

