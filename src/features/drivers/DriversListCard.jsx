import { Link } from "react-router-dom";

function DriversListCard({ driver }) {
    return (
        <div
            key={driver.driverId}
            className="relative bg-black rounded-xl overflow-hidden shadow-md hover:shadow-red-500/30 transition-shadow duration-300"
        >
            {/* Top accent line with team color */}
            <div
                className="h-1 w-full"
                style={{ backgroundColor: driver.teamColor }}
            ></div>

            {/* Driver Image */}
            <div className="p-6 flex flex-col items-center">
                <img
                    src={driver.image}
                    alt={driver.fullName}
                    className="w-28 h-28 rounded-full object-cover object-top border-4"
                    style={{ borderColor: driver.teamColor }}
                    loading="lazy"
                />

                <h3 className="text-xl font-semibold mt-4 mb-1">
                    {driver.fullName}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                    #{driver.number} • {driver.nationality}
                </p>

                <p className="text-red-400 font-bold text-lg">{driver.team}</p>

                <div className="flex justify-center gap-4 mt-4 text-sm">
                    <span>🏁 {driver.points} pts</span>
                    <span>•</span>
                    <span>Pos {driver.position}</span>
                </div>

                <Link
                    to={`/drivers/${driver.driverId}`}
                    className="mt-5 inline-block py-2 px-5 rounded-lg bg-red-600 text-slate-200 hover:bg-white hover:text-red-600 font-semibold transition-colors duration-300"
                >
                    View Profile
                </Link>
            </div>
        </div>
    );
}

export default DriversListCard;
