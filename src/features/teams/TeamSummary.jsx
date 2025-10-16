function TeamSummary({
    constructorsChampionships,
    teamName,
    teamNationality,
    driversChampionships,
    position,
    points,
    url,
}) {
    const hasTitles = constructorsChampionships > 0;
    return (
        <section className="bg-neutral-900 m-8 p-6 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white flex flex-col items-center gap-5 tracking-wider text-center">
            <h2 className="font-semibold text-2xl text-red-600 uppercase">
                🏎️ Team Overview
            </h2>
            {hasTitles ? (
                <div className="text-slate-300 leading-relaxed space-y-3">
                    <p>
                        With decades of racing heritage,{" "}
                        <span className="text-red-600 font-medium">
                            {teamName}{" "}
                        </span>
                        stands as one of Formula 1's most recognized names.
                        Representing {teamNationality}, the team has built its
                        reputation on engineering excellence, strategic
                        innovation, and a relentless pursuit of performance.
                    </p>

                    <p>
                        Over the years, {teamName} has secured{" "}
                        <span className="text-red-600 font-medium">
                            {constructorsChampionships}{" "}
                        </span>
                        Constructors' Championships and{" "}
                        <span className="text-red-600 font-medium">
                            {driversChampionships}{" "}
                        </span>
                        Drivers' titles — a testament to its enduring presence
                        at the forefront of the sport.
                    </p>

                    <p>
                        This season, the team currently holds{" "}
                        <span className="text-red-600 font-medium">
                            {position}
                        </span>{" "}
                        place in the standings with{" "}
                        <span className="text-red-600 font-medium">
                            {points}
                        </span>{" "}
                        points, continuing to demonstrate consistency and
                        competitiveness against the fiercest rivals on the grid.
                    </p>
                </div>
            ) : (
                <div className="text-slate-300 leading-relaxed space-y-3">
                    <p>
                        Representing{" "}
                        <span className="text-red-600 font-medium">
                            {teamNationality}
                        </span>
                        ,{" "}
                        <span className="text-red-600 font-medium">
                            {teamName}
                        </span>{" "}
                        brings determination, ambition, and a growing presence
                        to the Formula 1 grid. Known for its fighting spirit and
                        commitment to progress, the team continues to build
                        experience season after season.
                    </p>

                    <p>
                        Now holding{" "}
                        <span className="text-red-600 font-medium">
                            {position}
                        </span>{" "}
                        place in the standings with{" "}
                        <span className="text-red-600 font-medium">
                            {points}
                        </span>{" "}
                        points,{" "}
                        <span className="text-red-600 font-medium">
                            {teamName}
                        </span>{" "}
                        showcases steady improvement and a clear focus on
                        climbing higher in the championship.
                    </p>
                </div>
            )}
            <a
                href={url}
                rel="noopener noreferrer"
                target="_blank"
                className="bg-red-600 text-slate-300 text-md font-semibold px-3 py-1.5 rounded-md transition-all duration-200 hover:text-red-500 hover:bg-slate-100"
            >
                Check more about the team
            </a>
        </section>
    );
}

export default TeamSummary;
