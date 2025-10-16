function TeamsFilter({ onSelectedTeam }) {
    return (
        <div className="space-x-6 flex justify-center items-center">
            <select
                className="bg-neutral-700 text-slate-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 focus:ring-offset-0 transition duration-200"
                onChange={(e) => onSelectedTeam(e.target.value)}
            >
                <option value="all">All</option>
                <option value="ferrari">Ferrari</option>
                <option value="mclaren">Mclaren</option>
                <option value="red_bull">Red Bull Racing</option>
                <option value="mercedes">Mercedes</option>
                <option value="haas">Hass Ferrari</option>
                <option value="aston_martin">Aston Martin</option>
                <option value="alpine">Alpine</option>
                <option value="sauber">Kick Sauber</option>
                <option value="rb">Racing Bulls</option>
                <option value="williams">Williams</option>
            </select>
        </div>
    );
}

export default TeamsFilter;
