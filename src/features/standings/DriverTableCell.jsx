import { Link } from "react-router-dom";

function DriverTableCell({ driverData }) {
    const { driver, driverId, points, position, team, wins } = driverData;

    let emoji = "";

    if (position === 1) {
        emoji = "🥇";
    } else if (position === 2) {
        emoji = "🥈";
    } else if (position === 3) {
        emoji = "🥉";
    }

    return (
        <tr>
            <td className="py-2">
                {emoji} {position}
            </td>
            <td>
                {driver.name} {driver.surname}
            </td>
            <td className="hidden md:table-cell">{driver.nationality}</td>
            <td>{team.teamName}</td>
            <td>{points}</td>
            <td className="hidden md:table-cell">{wins}</td>
            <td className="bg-red-600 text-white hover:text-red-600 hover:bg-white transition-colors duration-300 hidden md:table-cell">
                <Link to={`/drivers/${driverId}`} className="cursor-pointer">
                    Show Driver
                </Link>
            </td>
        </tr>
    );
}

export default DriverTableCell;
