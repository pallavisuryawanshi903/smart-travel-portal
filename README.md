# Smart Travel & Tourism Portal 🌍

## Project Overview
Smart Travel & Tourism Portal is a responsive web application developed using React.js and Vite. It helps users explore beautiful travel destinations, view travel packages, search destinations, filter destinations by category, and save their favorite places.

## Features

- **Home Page:** Attractive landing page with popular destinations.
- **Destinations:** Explore different travel destinations.
- **Search Functionality:** Search destinations by name or country.
- **Category Filter:** Filter destinations by Beach, City, and Mountain.
- **Favorites:** Add and remove favorite destinations.
- **Local Storage:** Save favorite destinations even after refreshing the browser.
- **Packages:** View different travel packages and their prices.
- **Contact Page:** Contact form with basic validation.
- **404 Page:** Custom page for invalid routes.
- **Responsive Design:** Compatible with desktop, tablet, and mobile screens.

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- React Router DOM
- Local Storage

## Project Structure

```text
smart-travel-portal/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── destinations.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Destinations.jsx
│   │   ├── Packages.jsx
│   │   ├── Favorites.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to Project Folder

```bash
cd smart-travel-portal
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Project

```bash
npm run dev
```

Open the local URL displayed in the terminal to view the application.

## Production Build

To create a production build, run:

```bash
npm run build
```

The production-ready files will be generated inside the `dist` folder.

## Future Enhancements

- User Authentication
- Online Travel Booking System
- Payment Gateway Integration
- Backend and Database Integration

## Author

Developed as part of the Technosignia Internship Program.

## License

This project is developed for educational and learning purposes.
