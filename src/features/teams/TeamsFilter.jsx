function TeamsFilter() {
    return (
        <div className="space-x-6 flex justify-center items-center">
            <input
                type="text"
                placeholder="Type the teams' name"
                id="text"
                className="bg-neutral-700 text-slate-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 focus:ring-offset-0 transition duration-200"
            />
            <select className="bg-neutral-700 text-slate-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 focus:ring-offset-0 transition duration-200">
                <option value="ferrari">Ferrari</option>
                <option value="mclaren">Mclaren</option>
                <option value="redbulls">Red Bull Racing</option>
                <option value="mercedes">Mercedes</option>
                <option value="hassFerrari">Hass Ferrari</option>
                <option value="astonMartin">Aston Martin</option>
                <option value="alpine">Alpine</option>
                <option value="sauber">Kick Sauber</option>
                <option value="racingBulls">Racing Bulls</option>
                <option value="williams">Williams</option>
            </select>
        </div>
    );
}

export default TeamsFilter;
