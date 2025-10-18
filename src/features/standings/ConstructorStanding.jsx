import Main from "../../ui/Main";
import ConstructorTableCell from "./ConstructorTableCell";

function ConstructorStanding({ allTeams }) {
    const teams = allTeams["constructors_championship"];

    console.log(teams);

    return (
        <section className="bg-black py-12">
            <Main>
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
            </Main>
        </section>
    );
}

export default ConstructorStanding;
