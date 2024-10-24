# Scrapmart

A marketplace where users can sell scrap materials from their house or locality at competitive prices. This application connects users with professionals who will pick up the scrap materials and pay them in real-time, either through digital cash (e.g., G-Pay) or physical cash. Scrap prices fluctuate based on the market price, which is updated daily at 9:00 AM IST.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Scrapmart allows users to:
- Create an account and log in.
- Upload images of scrap materials.
- Provide detailed descriptions of the scrap (e.g., material type, weight, condition).
- Get real-time pricing based on the fluctuating market.
- Schedule professional scrap pickup at their location.

## Technologies Used

- **Next.js 14**: For building a highly optimized React-based frontend and backend.
- **Tailwind CSS**: For building responsive and modern UI.
- **MongoDB**: For database storage and managing user and scrap data.
- **Cloudinary**: For handling image uploads of scrap materials.
- **Node.js**: For backend API services.
- **Zod**: For schema validation.


## Features

- **Account Management**: Users can register, log in, and manage their profile.
- **Scrap Listings**: Upload images and details about the scrap, including the condition and type.
- **Price Fluctuation**: Scrap prices fluctuate based on the market, updated daily at 9:00 AM IST.
- **Location-based Pickup**: Scrap professionals arrive at the user’s location for collection.
- **Real-time Payment**: Users can receive payments via digital or physical cash.

## Project Structure

The project is organized as follows:

### Key Directories

- **`/components`**: Contains reusable UI components such as buttons, forms, modals, etc.
- **`/app`**: Contains all the pages of the application, with routing logic.
- **`/models`**: Database schemas for managing MongoDB collections.
- **`/store`**: Manages the global state using Next.js or a state management tool like Redux.
- **`/public`**: Static files like images, logos, etc., that are publicly accessible.
- **`/utils`**: Utility functions, such as price calculation, date formatting, etc.
- **`/helper`**: Handles API service communication and other asynchronous operations.

