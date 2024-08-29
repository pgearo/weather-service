## Project Overview

The **Weather Service API** is a Node.js-based application built with **Express** and **TypeScript**. It provides weather information by interacting with the OpenWeatherMap API, allowing users to query current weather conditions, temperature descriptions (such as hot, moderate, or cold), and any weather alerts for a specified location based on latitude and longitude coordinates.

### Key Features

- **Current Weather Conditions**: Retrieve up-to-date weather conditions (e.g., clear sky, rain, snow) for any given location.
- **Temperature Descriptions**: Classify the temperature as hot, moderate, or cold based on customizable criteria.
- **Weather Alerts**: Get real-time alerts for any severe weather conditions affecting the queried location.
- **RESTful API Design**: The API follows RESTful principles, ensuring easy integration and usage in various applications.
- **Built with TypeScript**: Leverages TypeScript for strong typing and improved developer experience, reducing runtime errors and enhancing code quality.
- **Extensible and Configurable**: The project is designed with extensibility in mind, allowing developers to easily add new features or modify existing ones to suit their needs.

### Usage Scenarios

- **Weather Applications**: Can be used as a backend service for mobile or web weather applications, providing accurate and real-time weather data.
- **Travel and Planning**: Useful for applications that assist users in planning their travel or daily activities based on current weather conditions.
- **Alert Systems**: Can be integrated into systems that require real-time alerts for severe weather conditions, such as disaster management applications or automated messaging systems.

### Getting Started

To get started with the Weather Service API, follow the installation instructions and configure your environment variables with your OpenWeatherMap API key. The server can be run in both development and production modes, with a built-in testing suite to ensure all functionalities work as expected.

#### Install dependencies:

- `npm install`

#### Set up environment variables:

- Create a .env file in the root directory and add your OpenWeatherMap API key

#### How to Start

- To start the server, run: `npm start`
- For development mode with automatic restarts on file changes, run: `npm run dev`
- Running tests: `npm run test`
