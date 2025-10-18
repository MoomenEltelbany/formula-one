import ConstructorTableCell from "./ConstructorTableCell";

function ConstructorStanding({ allTeams }) {
    const teams = allTeams["constructors_championship"];

    console.log(teams);

    return (
        <section className="bg-black py-12">
            <div className="overflow-x-auto bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white flex flex-col items-center gap-5 tracking-wider">
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold uppercase">
                    🏆 Constructor Standing
                </h2>
                <table className="w-full text-center  border-separate border-spacing-y-2">
                    {/* TABLE HEADER */}
                    <thead className="bg-neutral-800 text-gray-400 uppercase text-sm ">
                        <tr>
                            <th className="px-4 py-3">Position</th>
                            <th className="px-4 py-3">Team</th>
                            <th className="px-4 py-3 hidden md:table-cell">
                                Country
                            </th>
                            <th className="px-4 py-3">Points</th>
                            <th className="px-4 py-3 hidden md:table-cell">
                                Wins
                            </th>
                            <th className="px-4 py-3">Drivers</th>
                        </tr>
                    </thead>

                    {/* TABLE BODY */}
                    <tbody className="bg-black">
                        {teams.map((constructor) => (
                            <ConstructorTableCell
                                constructor={constructor}
                                key={constructor.teamId}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default ConstructorStanding;
