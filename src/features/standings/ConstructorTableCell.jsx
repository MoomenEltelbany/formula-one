import { useEffect, useState } from "react";
import { fetchTeamsDrivers } from "../../services/teamsMockDetails";

function ConstructorTableCell({ constructor }) {
    const [drivers, setDrivers] = useState([]);

    const { points, position, team, wins, teamId } = constructor;
    // console.log(constructor);

    let emoji = "";

    if (position === 1) {
        emoji = "🥇";
    } else if (position === 2) {
        emoji = "🥈";
    } else if (position === 3) {
        emoji = "🥉";
    }

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

    return (
        <tr>
            <td className="py-2">
                {emoji} {position}
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
