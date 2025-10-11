import {
    getDriverImage,
    getDriverTeamLogo,
} from "../services/driversMockDetails";

function HomeLeader({ currentChampion }) {
    const { topWinner } = currentChampion;

    const image = getDriverImage(
        `${topWinner.driver.name} ${topWinner.driver.surname}`
    );

    const teamImage = getDriverTeamLogo(topWinner.teamId);

    return (
        <section className="bg-black py-12">
            <main className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white relative">
                <h2 className="text-3xl font-title mb-10 text-red-500 font-bold text-center tracking-wide uppercase">
                    🏆 Championship Leader
                </h2>
                <div className="flex flex-col sm:flex-row items-center gap-8">
                    <img
                        src={image}
                        alt={`Photo of ${topWinner.driver.name} ${topWinner.driver.surname}`}
                        className="w-80 h-80 object-cover object-top rounded-lg border-2 border-red-500 shadow-md"
                    />

                    <div className="text-center sm:text-left space-y-2">
                        <h3 className="text-2xl font-semibold">
                            {topWinner.driver.name} {topWinner.driver.surname}
                        </h3>
                        <p className="text-red-400 font-medium">
                            {topWinner.team.teamName}
                        </p>
                        <p className="text-lg">🏁 {topWinner.points} Points</p>
                    </div>
                    <div className="w-20 h-20 absolute bottom-4 right-4">
                        <img
                            src={teamImage}
                            alt={topWinner.teamId}
                            className="w-20 h-20 object-cover object-top  shadow-md"
                        />
                    </div>
                </div>
            </main>
        </section>
    );
}

export default HomeLeader;
