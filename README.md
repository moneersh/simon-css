# Simon React

A React-based implementation of the classic Simon memory game, demonstrating the use of React, Vite, and Bootstrap for building a single-page application.

## Description

This project converts a traditional multi-page Simon game application into a modern single-page application (SPA) using React. It showcases modular components, client-side routing, and responsive design with Bootstrap and React Bootstrap components.

## Features

- **Modular React Components**: Clean and reusable components for each view (Login, Play, Scores, About).
- **Client-Side Routing**: Seamless navigation using React Router.
- **Responsive Design**: Styled with Bootstrap and React Bootstrap for mobile and desktop compatibility.
- **Vite Integration**: Fast development server and build tool for optimized performance.

## Project Structure

```plaintext
├── public                # Static assets (images, sounds)
│   ├── favicon.ico
│   ├── placeholder.jpg
│   └── ...               # Other assets
├── src                   # Source files
│   ├── app.jsx           # Main App component
│   ├── app.css           # Global styles
│   ├── index.jsx         # Entry point
│   ├── login             # Login component
│   │   ├── login.jsx
│   │   └── login.css
│   ├── play              # Play component
│   │   ├── play.jsx
│   │   └── play.css
│   ├── scores            # Scores component
│   │   ├── scores.jsx
│   │   └── scores.css
│   └── about             # About component
│       ├── about.jsx
│       └── about.css
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
