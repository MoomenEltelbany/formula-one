import { useEffect, useState } from "react";
import { fetchTeamsDrivers } from "../../services/teamsMockDetails";
import {
    getPodiumEmoji,
    getPositionColor,
} from "../../services/standingsMockData";

function ConstructorTableCell({ constructor }) {
    const [drivers, setDrivers] = useState([]);

    const { points, position, team, wins, teamId } = constructor;

    useEffect(
        function () {
            if (!teamId) return;

            const controller = new AbortController();

            async function getTeamDrivers() {
                try {
                    const data = await fetchTeamsDrivers(teamId, {
                        signal: controller.signal,
                    });
                    console.log(data.drivers);
                    setDrivers(data.drivers);
                } catch (error) {
                    console.log(error.message);
                    throw new Error("Drivers couldn't be fetched");
                }
            }

            getTeamDrivers();

            return () => {
                controller.abort();
            };
        },
        [teamId]
    );

    const positionStyling = getPositionColor(position);

    return (
        <tr className={positionStyling}>
            <td className="py-2">
                {getPodiumEmoji(position)} {position}
            </td>
            <td className="py-2">{team.teamName}</td>
            <td className="hidden md:table-cell">{team.country}</td>
            <td>{points}</td>
            <td className="hidden md:table-cell">{wins}</td>
            <td className="text-red-500">
                {drivers.map((driver) => (
                    <>
                        <p className="text-red-500">
                            {driver.driver.name} {driver.driver.surname}
                        </p>
                    </>
                ))}
            </td>
        </tr>
    );
}

export default ConstructorTableCell;
