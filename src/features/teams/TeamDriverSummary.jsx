import { Link } from "react-router-dom";
import { formatDate } from "../../utils/dateUtils";

function TeamDriverSummary({ driver }) {
    const { driver: selectedDriver } = driver;

    const {
        name,
        surname,
        birthday,
        nationality,
        number,
        points,
        position,
        wins,
        driverId,
    } = selectedDriver;

    return (
        <div className="bg-black border border-red-600/70 p-6 rounded-2xl shadow-lg hover:shadow-red-600/20 transition-all duration-300 max-w-sm text-slate-100 flex flex-col items-center gap-3">
            <h3 className="text-xl font-bold text-red-500 tracking-wide">
                {name} {surname}
            </h3>

            <div className="text-md space-y-1 text-red-500">
                <p className="">
                    <span className="font-semibold text-slate-300">#</span>{" "}
                    {number}
                </p>
                <p>
                    <span className=" font-semibold text-slate-300">
                        Points:
                    </span>{" "}
                    {points}
                </p>
                <p>
                    <span className=" font-semibold text-slate-300">
                        Position:
                    </span>{" "}
                    {position}
                </p>
                <p>
                    <span className=" font-semibold text-slate-300">Wins:</span>{" "}
                    {wins || 0}
                </p>
                <p className="italic">
                    <span className="font-semibold text-slate-300">Born:</span>{" "}
                    {birthday}
                </p>
                <p className="italic">
                    <span className="font-semibold text-slate-300">
                        Nationality:
                    </span>{" "}
                    {nationality}
                </p>
            </div>

            <Link
                to={`/drivers/${driverId}`}
                className="bg-red-600  text-md font-semibold px-3 py-1.5 rounded-md transition-all duration-200 hover:text-red-500 hover:bg-slate-100"
            >
                View Profile
            </Link>
        </div>
    );
}

export default TeamDriverSummary;
