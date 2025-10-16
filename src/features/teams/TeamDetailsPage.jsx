import { Link } from "react-router-dom";

function TeamDetailsPage() {
    return (
        <div className="h-full">
            <div className="flex flex-col justify-center items-center gap-2 pt-4">
                <h3 className="text-slate-400 font-semibold">Teams' drivers</h3>
                <Link
                    to="/drivers/driverId"
                    className="bg-red-600 text-slate-300 text-sm px-3 py-1.5 rounded-md transition-all duration-200 hover:text-red-500 hover:bg-slate-100"
                >
                    Hoba lala
                </Link>
                <Link
                    to="/drivers/driverId"
                    className="bg-red-600 text-slate-300 text-sm px-3 py-1.5 rounded-md transition-all duration-200 hover:text-red-500 hover:bg-slate-300"
                >
                    Ya Abdallah
                </Link>
            </div>
        </div>
    );
}

export default TeamDetailsPage;
