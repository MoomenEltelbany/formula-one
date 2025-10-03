import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow bg-black">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
