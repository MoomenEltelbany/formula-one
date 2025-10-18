import Main from "../../ui/Main";
import DriversFilter from "./DriversFilter";

function DriversHeader({ total, season, allTeams, onSelectedDrivers }) {
    return (
        <section className="bg-black py-16 text-white">
            <Main>
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold">
                    🏎️ F1 DRIVERS - {season} SEASON
                </h2>
                <p className="text-slate-300 text-lg my-7">
                    Explore all the drivers competing in the 2025 Formula 1
                    season — from rising talents to world champions. Get stats,
                    team info, and season highlights in one place.
                </p>
                <div className="flex justify-center items-center gap-5 text-red-500 text-xl font-semibold my-5">
                    <p>Total Drivers: {total}</p>
                    <span>|</span>
                    <p>Active Teams: {allTeams.teams.length}</p>
                </div>
                <DriversFilter onSelectedDrivers={onSelectedDrivers} />
            </Main>
        </section>
    );
}

export default DriversHeader;
