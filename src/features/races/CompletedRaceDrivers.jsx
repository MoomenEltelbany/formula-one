import { getDriverImage } from "../../services/driversMockDetails";

function CompletedRaceDrivers({ driverData }) {
    const { driver, grid, points, position, team, time } = driverData;

    const image = getDriverImage(`${driver.name} ${driver.surname}`);
    return (
        <div className="p-6 flex flex-col items-center bg-black text-center rounded-2xl shadow-md transition-all hover:shadow-red-600/15 duration-300 border-2 border-slate-900 hover:scale-105">
            <img
                src={image}
                alt={`${driver.name} ${driver.surname} Photo`}
                className="w-28 h-28 rounded-full object-cover object-top border-4"
                loading="lazy"
            />

            <h3 className="text-xl font-semibold mt-4 mb-1 break-words hyphens-auto">
                {driver.name} {driver.surname}
            </h3>
            <p className="text-md text-gray-400 mb-2">
                Position: {position === "NC" ? "DNF" : position}
            </p>
            <p className="text-md text-gray-400 mb-2">Grid: {grid}</p>
            <p className="text-md text-gray-400 mb-2">Points: {points}</p>
            <p
                className="text-md mb-2"
                style={{
                    color: position === 1 ? "purple" : "red",
                }}
            >
                Time: {time}
            </p>

            <p className="text-slate-400 font-bold text-lg">
                Team: {team.teamName}
            </p>
        </div>
    );
}

export default CompletedRaceDrivers;
