import Main from "../../ui/Main";

function StandingHeader({ allRaces }) {
    const { completedRacesCount, races } = allRaces;

    return (
        <section className="bg-black py-16 text-white">
            <Main>
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold">
                    🏆 F1 CHAMPIONSHIP STANDINGS - {new Date().getFullYear()}
                </h2>
                <p className="text-slate-300 text-2xl my-7">
                    Track who's leading the fight for glory
                </p>
                <p className="text-center text-red-500 text-xl font-semibold my-5">
                    Updated: After Round {completedRacesCount} of {races.total}
                </p>
            </Main>
        </section>
    );
}

export default StandingHeader;
