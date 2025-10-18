import { Link } from "react-router-dom";
import { formatDate, getRaceCountdown } from "../../utils/dateUtils";
import Main from "../../ui/Main";

const CIRCUIT_IMAGE =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2022_F1_CourseLayout_Australia.svg/1920px-2022_F1_CourseLayout_Australia.svg.png";

function NextRace({ raceData }) {
    const { circuit, schedule, raceName, raceId } = raceData;

    const daysLeftToRace = getRaceCountdown(schedule.race.date);

    return (
        <section className="bg-black py-12">
            <Main>
                <h2 className="text-4xl mb-6 text-red-500 font-bold text-center tracking-wide uppercase">
                    🏆 Next race
                </h2>
                <p className="text-4xl font-semibold text-center">
                    🌍 {circuit?.country}: {circuit?.city}
                </p>
                <p className="text-xl text-gray-300 text-center">
                    📍 {raceName}
                </p>
                <p className="text-2xl">📅 {formatDate(schedule.race.date)}</p>
                <p className="text-2xl text-red-500 text-center font-medium">
                    ⏰ {daysLeftToRace} days left to the next race
                </p>
                <div className="bg-black max-w-2xl rounded-lg border-2 border-red-500/50 shadow-md hover:scale-105 transition-transform duration-300">
                    <img
                        src={`/images/circuits/${raceId}.png`}
                        alt={`${raceName} Circuit photo`}
                    />
                </div>
                <Link
                    to={`/races/${circuit.circuitId}?raceId=${raceId}`}
                    className="mt-auto bg-red-600 text-white py-1.5 px-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-500 transition-colors duration-300"
                >
                    View Race Details
                </Link>
            </Main>
        </section>
    );
}

export default NextRace;
