import { mockDrivers } from "../../utils/driversMockDetails";
import DriversListCard from "./DriversListCard";

function DriversList() {
    return (
        <section className="bg-black py-16 text-white">
            <main className=" bg-neutral-900 m-4 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold uppercase">
                    List of the fastest driver on the planet
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {mockDrivers.map((driver) => (
                        <DriversListCard driver={driver} key={driver.id} />
                    ))}
                </div>
            </main>
        </section>
    );
}

export default DriversList;
