# Formula One Dashboard

A modern, responsive web application for Formula One enthusiasts to explore drivers, teams, races, and standings from the world of Formula One racing.

🏎️ [Formula One Dashboard Preview](https://formula-one-eight.vercel.app/)

## 🚀 Features

-   **Drivers**: Browse through all F1 drivers with detailed profiles
-   **Teams**: Explore all F1 teams with their statistics and history
-   **Races**: View race calendar, results, and detailed race information
-   **Standings**: Check current driver and constructor standings
-   **Responsive Design**: Works on desktop, tablet, and mobile devices
-   **Modern UI**: Built with React and Tailwind CSS for a sleek, fast experience

## 🛠️ Technologies Used

-   ⚛️ React 19
-   🎨 Tailwind CSS
-   🚀 Vite
-   🏎️ React Router
-   📊 React Icons
-   🌐 Three.js & Postprocessing (for potential 3D visualizations)

## 🚦 Getting Started

### Prerequisites

-   Node.js (v16 or later)
-   npm or yarn

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/yourusername/formula-one.git
    cd formula-one
    ```

2. Install dependencies

    ```bash
    npm install
    # or
    yarn
    ```

3. Start the development server

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏎️ Project Structure

```
src/
├── features/          # Feature-based modules
│   ├── drivers/      # Driver-related components and logic
│   ├── races/        # Race-related components and logic
│   ├── standings/    # Standings components and logic
│   └── teams/        # Team-related components and logic
├── pages/            # Page components
├── services/         # API services and data fetching
├── ui/               # Reusable UI components
│   └── animations/   # Animation components
└── utils/            # Utility functions and helpers
```

## 📝 Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

-   [F1 API](https://f1api.dev/docs/) - For the F1 data
-   All the amazing open-source libraries used in this project
