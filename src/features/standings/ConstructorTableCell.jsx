function ConstructorTableCell({ constructor }) {
    const { position, name, points, wins, podiums, drivers } = constructor;

    return (
        <tr>
            <td className="py-2">{position}</td>
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
