import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DriverDetailsPage from "./features/drivers/DriverDetailsPage";
import TeamDetailsPage from "./features/teams/TeamDetailsPage";
import RaceDetailsPage from "./features/races/RaceDetailsPage";
import StandingPage from "./pages/StandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import DriversPage, { loader as driversPageLoader } from "./pages/DriversPage";
import TeamsPage from "./pages/TeamsPage";
import RacesPage from "./pages/RacesPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";

import { loader as homeStatLoader } from "./ui/HomeStatCards";
import { loader as raceDetailsLoader } from "./features/races/RaceDetailsPage";
import { loader as driverDetailsLoader } from "./features/drivers/DriverDetailsPage";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: homeStatLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "drivers",
                element: <DriversPage />,
                loader: driversPageLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "drivers/:driverId",
                element: <DriverDetailsPage />,
                loader: driverDetailsLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "teams",
                element: <TeamsPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "teams/:teamId",
                element: <TeamDetailsPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "races",
                element: <RacesPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "races/:raceId",
                element: <RaceDetailsPage />,
                errorElement: <ErrorPage />,
                loader: raceDetailsLoader,
            },
            {
                path: "standings",
                element: <StandingPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
