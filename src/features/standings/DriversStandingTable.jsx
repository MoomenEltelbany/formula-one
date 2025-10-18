import Main from "../../ui/Main";
import DriverTableCell from "./DriverTableCell";

function DriversStandingTable({ allDrivers }) {
    const { data } = allDrivers;

    const drivers = data["drivers_championship"];

    return (
        <section className="bg-black py-12">
            <Main>
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold uppercase">
                    🏁 Drivers Standings
                </h2>
                <table className="w-full text-center  border-separate border-spacing-y-2">
                    {/* TABLE HEADER */}
                    <thead className="bg-neutral-800 text-gray-400 uppercase text-sm ">
                        <tr>
                            <th className="px-4 py-3">Position</th>
                            <th className="px-4 py-3">Driver</th>
                            <th className="px-4 py-3 hidden md:table-cell">
                                Nationality
                            </th>
                            <th className="px-4 py-3">Team</th>
                            <th className="px-4 py-3">Points</th>
                            <th className="px-4 py-3 hidden md:table-cell">
                                Wins
                            </th>
                            <th className="px-4 py-3 hidden md:table-cell">
                                Link
                            </th>
                        </tr>
                    </thead>

                    {/* TABLE BODY */}
                    <tbody className="bg-black">
                        {drivers.map((driver) => (
                            <DriverTableCell
                                driverData={driver}
                                key={driver.driverId}
                            />
                        ))}
                    </tbody>
                </table>
            </Main>
        </section>
    );
}

export default DriversStandingTable;
