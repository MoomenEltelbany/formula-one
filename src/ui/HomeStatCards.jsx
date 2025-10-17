/* eslint-disable react-refresh/only-export-components */

import { GiF1Car, GiCarWheel, GiCheckeredFlag, GiTrophy } from "react-icons/gi";
import {
    fetchAllDrivers,
    fetchDriverChampionshipStats,
} from "../services/driversMockDetails";
import {
    fetchAllTeams,
    fetchTeamChampionshipStats,
} from "../services/teamsMockDetails";
import LoadingSpinner from "./LoadingSpinner";
import { fetchAllRaces } from "../services/racesMockDetails";

const divStyles = `border-2 p-6 border-red-500/60 rounded-xl flex justify-center items-center flex-col hover:bg-gradient-to-br hover:from-red-50 hover:to-white hover:text-red-600 transition-all duration-300 space-y-3 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-lg hover:shadow-2xl hover:scale-105 hover:border-red-600`;

/*
    HomeStatCards Component

    Displays key statistics for the Home screen:
        - drivers: All current drivers registered on the grid
        - currentChampion: Contains both the current points leader and the driver with the most wins
        - teams: All current teams participating in the season
        - currentTopTeam: The leading team along with its total championship points
*/

function HomeStatCards({
    drivers,
    currentChampions,
    teams,
    currentTeams,
    raceData,
}) {
    const currentTopTeam = currentTeams["constructors_championship"][0];

    const { currentLeader, topWinner } = currentChampions;

    const { points: teamPoints, team: teamData } = currentTopTeam;
    // console.log(raceData);

    const { races, completedRacesCount, nextRaceName, raceId } = raceData;

    const STATS = [
        {
            id: 1,
            icon: GiF1Car,
            title: `${drivers.total} Drivers`,
            label: "Most wins this season",
            highlight: `${topWinner.driver.name} ${topWinner.driver.surname}: ${topWinner.wins} wins`,
        },
        {
            id: 2,
            icon: GiCarWheel,
            title: `${teams.total} Teams`,
            label: `Leading team: ${teamData.teamName}`,
            highlight: `Team Points: ${teamPoints}pts`,
        },
        {
            id: 3,
            icon: GiCheckeredFlag,
            title: `${races.total} Races`,
            label: `Completed Races: ${completedRacesCount}`,
            highlight: `Next race: ${nextRaceName}`,
        },
        {
            id: 4,
            icon: GiTrophy,
            title: "Leader",
            label: `${currentLeader.driver.name} ${currentLeader.driver.surname}`,
            highlight: `Total points: ${currentLeader.points}pts`,
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
                        <p className="text-base font-bold">{stat.label} </p>
                        <p>
                            <strong className="text-red-500 font-semibold text-md">
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
    const [drivers, currentChampions, teams, currentTeams, raceData] =
        await Promise.all([
            fetchAllDrivers(),
            fetchDriverChampionshipStats(),
            fetchAllTeams(),
            fetchTeamChampionshipStats(),
            fetchAllRaces(),
        ]);

    return {
        drivers,
        currentChampions,
        teams,
        currentTeams,
        raceData,
    };
}

export default HomeStatCards;
