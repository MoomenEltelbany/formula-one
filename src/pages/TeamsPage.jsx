/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import TeamsHeader from "../features/teams/TeamsHeader";
import TeamsList from "../features/teams/TeamsList";
import { fetchTeamChampionshipStats } from "../services/teamsMockDetails";
import { useState } from "react";

function TeamsPage() {
    const [selectedTeam, setSelectedTeam] = useState("all");

    const { constructors_championship: constructorsTeams } = useLoaderData();

    const filteredTeams = constructorsTeams.filter(
        (team) => team.teamId === selectedTeam
    );

    const chosenTeams =
        selectedTeam === "all" ? constructorsTeams : filteredTeams;

    return (
        <div>
            <TeamsHeader
                total={constructorsTeams.length}
                onSelectedTeam={setSelectedTeam}
            />
            <TeamsList constructorsTeams={chosenTeams} />
        </div>
    );
}

export async function loader() {
    const data = await fetchTeamChampionshipStats();

    return data;
}

export default TeamsPage;
