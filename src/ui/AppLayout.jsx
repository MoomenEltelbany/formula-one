import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div className="flex flex-col h-screen">
            {isLoading && <LoadingSpinner />}

            <Header />
            <main className="flex-grow bg-black">
                <Outlet />
                <ScrollRestoration />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
