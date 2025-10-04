// !All the data here are mock data and need to be updated later with real ones from API

const STATS = [
    {
        id: 1,
        icon: "👱🏻‍♂️",
        title: "20 Drivers",
        stat: "Most wins this season",
        highlight: "Oscar Piastri (10 wins)",
    },
    {
        id: 2,
        icon: "🏎️",
        title: "10 Teams",
        stat: "Leading team: Mclaren",
        highlight: "Team Points: 689pts",
    },
    {
        id: 3,
        icon: "🏁",
        title: "24 Races",
        stat: "Completed Races: 18",
        highlight: "Next race: LA, USA",
    },
    {
        id: 4,
        icon: "👑",
        title: "Leader",
        stat: "Oscar Piastri",
        highlight: "Total points: 327pts",
    },
];

const divStyles = `border-2 p-4 border-red-500 rounded-lg flex justify-center items-center flex-col hover:bg-white hover:text-red-500 transition-colors duration-300 space-y-2 bg-neutral-900 text-white shadow-md hover:shadow-lg`;

function HomeStatCards() {
    return (
        <section className="my-16 px-4 sm:px-6 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-8 text-lg text-center">
            {STATS.map((stat) => {
                return (
                    <div className={divStyles} key={stat.id}>
                        <p className="text-4xl">{stat.icon}</p>
                        <p className="text-xl font-semibold">{stat.title}</p>
                        <p className="text-base">{stat.stat} </p>
                        <p>
                            <strong className="text-red-500 font-medium">
                                {stat.highlight}
                            </strong>
                        </p>
                    </div>
                );
            })}
        </section>
    );
}

export default HomeStatCards;
