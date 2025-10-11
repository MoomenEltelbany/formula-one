import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DriverDetailsPage from "./features/drivers/DriverDetailsPage";
import TeamDetailsPage from "./features/teams/TeamDetailsPage";
import RaceDetailsPage from "./features/races/RaceDetailsPage";
import StandingPage from "./pages/StandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import DriversPage from "./pages/DriversPage";
import TeamsPage from "./pages/TeamsPage";
import RacesPage from "./pages/RacesPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";

import { loader as homeStatLoader } from "./ui/HomeStatCards";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: homeStatLoader,
            },
            {
                path: "drivers",
                element: <DriversPage />,
            },
            {
                path: "drivers/:driverId",
                element: <DriverDetailsPage />,
            },
            {
                path: "teams",
                element: <TeamsPage />,
            },
            {
                path: "teams/:teamId",
                element: <TeamDetailsPage />,
            },
            {
                path: "races",
                element: <RacesPage />,
            },
            {
                path: "races/:raceId",
                element: <RaceDetailsPage />,
            },
            {
                path: "standings",
                element: <StandingPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
