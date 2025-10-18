import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DriverDetailsPage from "./features/drivers/DriverDetailsPage";
import TeamDetailsPage from "./features/teams/TeamDetailsPage";
import RaceDetailsPage from "./features/races/RaceDetailsPage";
import StandingPage, {
    loader as standingPageLoader,
} from "./pages/StandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import DriversPage, { loader as driversPageLoader } from "./pages/DriversPage";
import TeamsPage, { loader as teamPageLoader } from "./pages/TeamsPage";
import RacesPage, { loader as racePageLoader } from "./pages/RacesPage";
import RaceResultsPage, {
    loader as raceResultsLoader,
} from "./features/races/RaceResultsPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";

import { loader as homeStatLoader } from "./ui/HomeStatCards";
import { loader as raceDetailsLoader } from "./features/races/RaceDetailsPage";
import { loader as driverDetailsLoader } from "./features/drivers/DriverDetailsPage";
import { loader as teamDetailsLoader } from "./features/teams/TeamDetailsPage";
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
                loader: teamPageLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "teams/:teamId",
                element: <TeamDetailsPage />,
                loader: teamDetailsLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "races",
                element: <RacesPage />,
                loader: racePageLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "races/:raceId",
                element: <RaceDetailsPage />,
                loader: raceDetailsLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "race/:completedRaceId",
                element: <RaceResultsPage />,
                loader: raceResultsLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "standings",
                element: <StandingPage />,
                loader: standingPageLoader,
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
