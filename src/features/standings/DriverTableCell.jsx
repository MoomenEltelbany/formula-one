function DriverTableCell({ driver }) {
    const { position, givenName, familyName, team, points, wins, podiums } =
        driver;

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
                {givenName} {familyName}
            </td>
            <td>{team}</td>
            <td>{points}</td>
            <td className="hidden md:table-cell">{wins}</td>
            <td className="hidden md:table-cell">{podiums}</td>
            <td className="bg-red-600 text-white hover:text-red-600 hover:bg-white transition-colors duration-300 hidden md:table-cell">
                <button className="cursor-pointer">Show Driver</button>
            </td>
        </tr>
    );
}

export default DriverTableCell;
