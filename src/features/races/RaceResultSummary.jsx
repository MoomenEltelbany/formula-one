import Main from "../../ui/Main";
import CompletedRaceDrivers from "./CompletedRaceDrivers";

function RaceResultSummary({ results }) {
    return (
        <Main>
            <h3 className="text-2xl text-red-500">
                Driver Breakdown: Who Delivered, Who Struggled
            </h3>
            <p className="text-slate-300 tracking-wide text-xl text-center">
                From pole position to final lap drama, here's how each driver
                fared in this Grand Prix. Whether they climbed the ranks, held
                their ground, or faced setbacks, this section reveals the full
                story behind every helmet on the grid.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {results.map((driver) => (
                    <CompletedRaceDrivers
                        key={driver.driver.driverId}
                        driverData={driver}
                    />
                ))}
            </div>
        </Main>
    );
}

export default RaceResultSummary;
