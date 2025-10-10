function RacesFilter({ raceStatus, onRaceStatus }) {
    return (
        <div className="space-x-6 flex justify-center items-center">
            <select
                className="bg-neutral-700 text-slate-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 focus:ring-offset-0 transition duration-200"
                value={raceStatus}
                onChange={(e) => onRaceStatus(e.target.value)}
            >
                <option value="all">All Races</option>
                <option value="completed">Completed Races</option>
                <option value="upcoming">Upcoming Races</option>
            </select>
        </div>
    );
}

export default RacesFilter;
