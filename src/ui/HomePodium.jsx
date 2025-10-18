import { getDriverImage } from "../services/driversMockDetails";

function HomePodium({ currentChampions }) {
    const { topThreeDrivers } = currentChampions;

    const DRIVERS = topThreeDrivers.map((driverData, index) => ({
        position: index + 1,
        name: `${driverData.driver.name} ${driverData.driver.surname}`,
        team: driverData.team.teamName,
        points: driverData.points,
        image: getDriverImage(
            `${driverData.driver.name} ${driverData.driver.surname}`
        ),
    }));

    return (
        <section className="bg-black py-16 text-white">
            <main className=" bg-neutral-900 m-4 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold">
                    TOP 3 DRIVERS (PODIUM)
                </h2>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    {DRIVERS.map((driver) => (
                        <div
                            key={driver.name}
                            className={`flex flex-col items-center bg-black rounded-xl border-2 border-slate-700 shadow-lg p-4 w-56 transition-all hover:scale-105 hover:shadow-red-600/20 duration-300`}
                        >
                            <div className="w-28 h-28 overflow-hidden rounded-full border-2 border-gray-700 mb-4">
                                <img
                                    src={driver.image}
                                    alt={driver.name}
                                    loading="lazy"
                                    className="object-cover object-top w-full h-full"
                                />
                            </div>
                            <h3 className="font-title text-xl">
                                {driver.name}
                            </h3>
                            <p className="text-sm text-gray-400">
                                {driver.team}
                            </p>
                            <p className="text-lg font-semibold mt-2 text-red-500">
                                {driver.points} pts
                            </p>
                            <span className="mt-auto text-sm opacity-80">
                                #{driver.position} place
                            </span>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
}

export default HomePodium;
