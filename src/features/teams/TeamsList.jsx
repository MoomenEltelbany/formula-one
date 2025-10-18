import Main from "../../ui/Main";
import TeamListCard from "./TeamListCard";

function TeamsList({ constructorsTeams }) {
    return (
        <section className="bg-black py-16 text-white">
            <Main>
                <h2 className="text-3xl font-title mb-10 tracking-wide text-red-500 font-bold uppercase">
                    List of the best constructors on the planet
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                    {constructorsTeams.map((constructor) => (
                        <TeamListCard
                            constructor={constructor}
                            key={constructor.teamId}
                        />
                    ))}
                </div>
            </Main>
        </section>
    );
}

export default TeamsList;
