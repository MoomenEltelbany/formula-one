const DRIVERS = [
    {
        position: 2,
        name: "Lando Norris",
        team: "Mclaren",
        points: 285,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3975_by_Stepro_%28cropped2%29.jpg/1024px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3975_by_Stepro_%28cropped2%29.jpg",
        teamColor: "border-orange-500",
    },
    {
        position: 1,
        name: "Max Verstappen",
        team: "Red Bull Racing",
        points: 575,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg/1024px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg",
        teamColor: "border-blue-500",
    },
    {
        position: 3,
        name: "Lewis Hamilton",
        team: "Mercedes AMG",
        points: 275,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Lewis_Hamilton_2022_S%C3%A3o_Paulo_Grand_Prix_%2852498120773%29_%28cropped%29.jpg",
        teamColor: "border-gray-400",
    },
];

function HomePodium() {
    return (
        <section className="bg-black py-16 text-white">
            <main className=" bg-neutral-900 m-4 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-title mb-10 tracking-wide">
                    TOP 3 DRIVERS (PODIUM)
                </h2>

                <div className="flex flex-col sm:flex-row justify-center items-end gap-6">
                    {DRIVERS.map((driver) => (
                        <div
                            key={driver.name}
                            className={`flex flex-col items-center bg-black rounded-xl border-2 ${driver.teamColor} shadow-lg p-4 w-56 transition-transform hover:scale-105`}
                            style={{
                                height:
                                    driver.position === 1 ? "340px" : "300px",
                                marginTop:
                                    driver.position === 1 ? "-20px" : "0px",
                            }}
                        >
                            <div className="w-28 h-28 overflow-hidden rounded-full border-2 border-gray-700 mb-4">
                                <img
                                    src={driver.image}
                                    alt={driver.name}
                                    className="object-cover object-top w-full h-full"
                                />
                            </div>
                            <h3 className="font-title text-xl">
                                {driver.name}
                            </h3>
                            <p className="text-sm text-gray-400">
                                {driver.team}
                            </p>
                            <p className="text-lg font-semibold mt-2">
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
