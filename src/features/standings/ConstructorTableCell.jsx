function ConstructorTableCell({ constructor }) {
    const { position, name, points, wins, podiums, drivers } = constructor;

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
            <td className="py-2">{name}</td>
            <td>{points}</td>
            <td className="hidden md:table-cell">{wins}</td>
            <td className="hidden md:table-cell">{podiums}</td>
            <td className="text-red-500">
                <p>{drivers[0]}</p>
                <p>{drivers[1]}</p>
            </td>
        </tr>
    );
}

export default ConstructorTableCell;
