import { mockDrivers } from "../../utils/driversMockDetails";
import DriversListCard from "./DriversListCard";

const IMAGE =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg/1024px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg";

function DriversList() {
    const driver = mockDrivers[0];
    console.log(driver);

    return (
        <section className="bg-black py-16 text-white">
            <main className=" bg-neutral-900 m-4 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold uppercase">
                    List of the fastest driver on the planet
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                    {mockDrivers.map((driver) => (
                        <DriversListCard driver={driver} />
                    ))}
                </div>
            </main>
        </section>
    );
}

export default DriversList;
