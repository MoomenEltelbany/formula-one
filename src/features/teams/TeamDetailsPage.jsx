/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import { fetchTeamsDrivers } from "../../services/teamsMockDetails";
import TeamOverview from "./TeamOverview";
import TeamSummary from "./TeamSummary";
import TeamDriverSummary from "./TeamDriverSummary";

function TeamDetailsPage() {
    const data = useLoaderData();

    const { drivers, team, season } = data;

    const {
        teamName,
        constructorsChampionships,
        driversChampionships,
        points,
        position,
        teamNationality,
        wins,
        url,
    } = team;

    return (
        <div className="bg-black py-12">
            <TeamOverview
                teamName={teamName}
                constructorsChampionships={constructorsChampionships}
                driversChampionships={driversChampionships}
                points={points}
                position={position}
                teamNationality={teamNationality}
                season={season}
                wins={wins}
            />

            <TeamSummary
                driversChampionships={driversChampionships}
                constructorsChampionships={constructorsChampionships}
                teamName={teamName}
                teamNationality={teamNationality}
                points={points}
                position={position}
                url={url}
            />

            <section className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white flex flex-col items-center gap-5 tracking-wider text-center">
                <h2 className="font-semibold text-2xl text-red-600 uppercase">
                    Teams' drivers
                </h2>
                <div className="flex flex-wrap md:flex-nowrap gap-8 text-left">
                    {drivers.map((driver) => (
                        <TeamDriverSummary
                            driver={driver}
                            teamName={teamName}
                            key={driver.driveId}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default TeamDetailsPage;

export async function loader({ params }) {
    const data = await fetchTeamsDrivers(params.teamId);

    return data;
}
