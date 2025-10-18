import { useLoaderData, useSearchParams } from "react-router-dom";
import { fetchRaceById } from "../../services/racesMockDetails";
import Main from "../../ui/Main";

/* eslint-disable react-refresh/only-export-components */
function RaceDetailsPage() {
    // We sent the raceId through the URL so that we can show the image according to the raceId
    const [searchParams] = useSearchParams();

    const raceId = searchParams.get("raceId");

    // The data we fetched from the API, we destructured it to make it simpler
    const data = useLoaderData();

    const {
        circuitLength,
        circuitName,
        city,
        country,
        fastestLapDriverId,
        fastestLapTeamId,
        fastestLapYear,
        firstParticipationYear,
        lapRecord,
        numberOfCorners,
        url,
    } = data;

    // Function to Capitalize the first letter of the driver's name and the constructor one as well
    function capitalize(name) {
        const newName = name.replaceAll("_", " ");
        return newName.charAt(0).toUpperCase() + newName.slice(1);
    }

    return (
        <section className="bg-black py-12">
            <Main>
                <h2 className="text-4xl mb-6 text-red-500 font-extrabold text-center tracking-widest uppercase drop-shadow-md">
                    🏁 Spotlight: {circuitName} ({city}, {country})
                </h2>
                <p className="text-lg text-slate-200 leading-relaxed mb-4">
                    Located in{" "}
                    <span className="font-semibold text-white">
                        {city}, {country}
                    </span>
                    , the{" "}
                    <span className="font-semibold text-white">
                        {circuitName}
                    </span>{" "}
                    has been part of the Formula 1 calendar since{" "}
                    <span className="font-semibold text-white">
                        {firstParticipationYear}
                    </span>
                    .
                </p>
                <p className="text-lg text-slate-200 leading-relaxed mb-4">
                    Stretching{" "}
                    <span className="font-semibold text-white">
                        {circuitLength}
                    </span>{" "}
                    meters with{" "}
                    <span className="font-semibold text-white">
                        {numberOfCorners}
                    </span>{" "}
                    corners, it offers a thrilling mix of speed and technical
                    challenge.
                </p>
                <p className="text-lg text-slate-200 leading-relaxed">
                    The current lap record stands at{" "}
                    <span className="font-semibold text-white">
                        {lapRecord}
                    </span>
                    , set by{" "}
                    <span className="font-semibold text-white">
                        {capitalize(fastestLapDriverId)}
                    </span>{" "}
                    in{" "}
                    <span className="font-semibold text-white">
                        {fastestLapYear}
                    </span>{" "}
                    while driving for{" "}
                    <span className="font-semibold text-white">
                        {capitalize(fastestLapTeamId)}
                    </span>
                    . This circuit continues to test the limits of drivers and
                    machines alike.
                </p>
                <div className="bg-black max-w-2xl rounded-lg border-2 border-red-500/50 shadow-md hover:scale-105 transition-transform duration-300">
                    <img
                        src={`/images/circuits/${raceId}.png`}
                        alt={`${circuitName} Circuit photo`}
                    />
                </div>
                <p className="text-lg text-slate-300">
                    Learn more about the circuit's history and layout on
                    Wikipedia.
                </p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Learn more about ${circuitName} on Wikipedia`}
                    className="text-lg font-semibold bg-red-600 text-white py-1.5 px-3 rounded-xl hover:bg-white hover:text-red-600 transition-color duration-300"
                >
                    Learn More
                </a>
            </Main>
        </section>
    );
}

// Loader function that fetches the data about the race according to the raceId
export async function loader({ params }) {
    const race = await fetchRaceById(params.raceId);

    return race;
}

export default RaceDetailsPage;
