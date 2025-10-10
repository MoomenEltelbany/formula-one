import { Link } from "react-router-dom";

function TeamListCard({ team }) {
    return (
        <div
            key={team.constructorId}
            className="relative bg-black rounded-xl overflow-hidden shadow-md transition-shadow duration-300 flex flex-col h-full"
            style={{ boxShadow: `0 4px 6px -1px ${team.teamColor}4D` }}
        >
            <div
                className="h-1 w-full"
                style={{ backgroundColor: team.teamColor }}
            ></div>

            <div className="p-6 flex flex-col items-center flex-grow">
                <div
                    className="w-28 h-28 rounded-full border-4 overflow-hidden flex items-center justify-center bg-white"
                    style={{ borderColor: team.teamColor }}
                >
                    <img
                        src={team.image}
                        alt={team.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                    />
                </div>

                <h3 className="text-xl font-semibold mt-4 mb-1">{team.name}</h3>
                <p className="text-sm text-gray-400 mb-2">
                    #{team.position} • {team.nationality}
                </p>

                <h3 className="text-slate-400 font-semibold">Teams' drivers</h3>
                <div className="flex flex-col justify-center items-center gap-2 pt-4">
                    <Link
                        to="/drivers/driverId"
                        className="bg-red-600 text-slate-300 text-sm px-3 py-1.5 rounded-md transition-all duration-200 hover:text-red-500 hover:bg-slate-100"
                    >
                        {team.drivers[0]}
                    </Link>
                    <Link
                        to="/drivers/driverId"
                        className="bg-red-600 text-slate-300 text-sm px-3 py-1.5 rounded-md transition-all duration-200 hover:text-red-500 hover:bg-slate-300"
                    >
                        {team.drivers[1]}
                    </Link>
                </div>

                <div className="flex justify-center gap-4 mt-4 text-sm">
                    <span>🏁 {team.points} pts</span>
                    <span>•</span>
                    <span>Pos {team.position}</span>
                </div>

                {/* The constructorId will be teamId we will get from an API but I am putting this as a placeholder for now */}
                <Link
                    to={`/teams/${team.teamId}`}
                    className="mt-5 inline-block py-2 px-5 rounded-lg bg-red-600 text-slate-200 hover:bg-white hover:text-red-600 font-semibold transition-colors duration-300"
                >
                    View Team's Profile
                </Link>
            </div>
        </div>
    );
}

export default TeamListCard;
