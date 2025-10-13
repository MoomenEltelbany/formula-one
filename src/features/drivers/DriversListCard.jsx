import { Link } from "react-router-dom";
import { getDriverImage } from "../../services/driversMockDetails";

function DriversListCard({ driver }) {
    const { driverId, name, surname, nationality, number, teamId } = driver;

    const image = getDriverImage(`${name} ${surname}`);

    function formatTeamName(teamId) {
        if (!teamId) return "";
        const map = {
            red_bull: "Red Bull Racing",
            rb: "Racing Bulls",
            mclaren: "McLaren",
            ferrari: "Ferrari",
            mercedes: "Mercedes",
            aston_martin: "Aston Martin",
            alpine: "Alpine",
            williams: "Williams",
            sauber: "Kick Sauber",
            haas: "Haas",
        };
        return map[teamId.toLowerCase()] || teamId.replace(/_/g, " ");
    }

    return (
        <div
            key={driverId}
            className="relative bg-black rounded-xl overflow-hidden shadow-md transition-all hover:shadow-red-600/15 duration-300 border-2 border-slate-900 hover:scale-110"
        >
            {/* Driver Image */}
            <div className="p-6 flex flex-col items-center">
                <img
                    src={image}
                    alt={`${name} ${surname}`}
                    className="w-28 h-28 rounded-full object-cover object-top border-4"
                    loading="lazy"
                />

                <h3 className="text-xl font-semibold mt-4 mb-1">
                    {name} {surname}
                </h3>
                <p className="text-md text-gray-400 mb-2">
                    #{number} • {nationality}
                </p>

                <p className="text-slate-400 font-bold text-lg">
                    {formatTeamName(teamId)}
                </p>

                {/* <div className="flex justify-center gap-4 mt-4 text-sm">
                    <span>🏁 {drivers.points} pts</span>
                    <span>•</span>
                    <span>Pos {drivers.position}</span>
                </div> */}

                <Link
                    to={`/drivers/${driverId}`}
                    className="mt-5 inline-block py-2 px-5 rounded-lg bg-red-600 text-slate-200 hover:bg-white hover:text-red-600 font-semibold transition-colors duration-300"
                >
                    View Profile
                </Link>
            </div>
        </div>
    );
}

export default DriversListCard;
