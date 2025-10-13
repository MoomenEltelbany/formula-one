import { Link } from "react-router-dom";

function DriversListCard({ driver }) {
    const { driverId, name, surname, nationality, number, teamId, url } =
        driver;

    return (
        <div
            key={driverId}
            className="relative bg-black rounded-xl overflow-hidden shadow-md  transition-shadow duration-300"
            // style={{ boxShadow: `0 4px 6px -1px ${drivers.teamColor}4D` }}
        >
            {/* Top accent line with team color */}
            {/* <div
                className="h-1 w-full"
                style={{ backgroundColor: drivers.teamColor }}
            ></div> */}

            {/* Driver Image */}
            <div className="p-6 flex flex-col items-center">
                {/* <img
                    src={drivers.image}
                    alt={drivers.fullName}
                    className="w-28 h-28 rounded-full object-cover object-top border-4"
                    style={{ borderColor: drivers.teamColor }}
                    loading="lazy"
                /> */}

                <h3 className="text-xl font-semibold mt-4 mb-1">
                    {name} {surname}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                    #{number} • {nationality}
                </p>

                <p className="text-red-400 font-bold text-lg">{teamId}</p>

                {/* <div className="flex justify-center gap-4 mt-4 text-sm">
                    <span>🏁 {drivers.points} pts</span>
                    <span>•</span>
                    <span>Pos {drivers.position}</span>
                </div>

                <Link
                    to={`/drivers/${drivers.driverId}`}
                    className="mt-5 inline-block py-2 px-5 rounded-lg bg-red-600 text-slate-200 hover:bg-white hover:text-red-600 font-semibold transition-colors duration-300"
                >
                    View Profile
                </Link> */}
            </div>
        </div>
    );
}

export default DriversListCard;
