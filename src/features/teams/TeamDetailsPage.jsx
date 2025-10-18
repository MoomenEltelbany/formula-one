/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";
import { fetchTeamsDrivers } from "../../services/teamsService";
import TeamOverview from "./TeamOverview";
import TeamSummary from "./TeamSummary";
import TeamDriverSummary from "./TeamDriverSummary";
import Main from "../../ui/Main";

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

            <Main>
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
            </Main>
        </div>
    );
}

export default TeamDetailsPage;

export async function loader({ params }) {
    const data = await fetchTeamsDrivers(params.teamId);

    return data;
}
