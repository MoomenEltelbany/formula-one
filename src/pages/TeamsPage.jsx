/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import TeamsHeader from "../features/teams/TeamsHeader";
import TeamsList from "../features/teams/TeamsList";
import { fetchTeamChampionshipStats } from "../services/teamsMockDetails";

function TeamsPage() {
    const { constructors_championship: constructorsTeams } = useLoaderData();

    return (
        <div>
            <TeamsHeader total={constructorsTeams.length} />
            <TeamsList constructorsTeams={constructorsTeams} />
        </div>
    );
}

export async function loader() {
    const data = await fetchTeamChampionshipStats();

    return data;
}

export default TeamsPage;
