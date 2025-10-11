/* eslint-disable react-refresh/only-export-components */

import { GiF1Car, GiCarWheel, GiCheckeredFlag, GiTrophy } from "react-icons/gi";
import {
    getAllDrivers,
    getDriverChampionship,
} from "../services/driversMockDetails";

const divStyles = `border-2 p-6 border-red-500/60 rounded-xl flex justify-center items-center flex-col hover:bg-gradient-to-br hover:from-red-50 hover:to-white hover:text-red-600 transition-all duration-300 space-y-3 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-lg hover:shadow-2xl hover:scale-105 hover:border-red-600`;

function HomeStatCards({ drivers, currentChampion }) {
    const { champion, wins } = currentChampion;

    const STATS = [
        {
            id: 1,
            icon: GiF1Car,
            title: `${drivers.total} Drivers`,
            stat: "Most wins this season",
            highlight: `${wins.driver.name} ${wins.driver.surname}: ${wins.wins} wins`,
        },
        {
            id: 2,
            icon: GiCarWheel,
            title: "10 Teams",
            stat: "Leading team: Mclaren",
            highlight: "Team Points: 689pts",
        },
        {
            id: 3,
            icon: GiCheckeredFlag,
            title: "24 Races",
            stat: "Completed Races: 18",
            highlight: "Next race: LA, USA",
        },
        {
            id: 4,
            icon: GiTrophy,
            title: "Leader",
            stat: `${champion.driver.name} ${champion.driver.surname}`,
            highlight: `Total points: ${champion.points}pts`,
        },
    ];

    return (
        <section className="my-16 px-4 sm:px-6 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-8 text-center">
            {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                    <div className={divStyles} key={stat.id}>
                        <Icon className="text-4xl text-red-500 mb-3 drop-shadow-lg font-medium" />
                        <p className="text-xl font-semibold">{stat.title}</p>
                        <p className="text-base ">{stat.stat} </p>
                        <p>
                            <strong className="text-red-500 font-semibold text-sm">
                                {stat.highlight}
                            </strong>
                        </p>
                    </div>
                );
            })}
        </section>
    );
}

export async function loader() {
    const [drivers, currentChampion] = await Promise.all([
        getAllDrivers(),
        getDriverChampionship(),
    ]);

    return { drivers, currentChampion };
}

export default HomeStatCards;
