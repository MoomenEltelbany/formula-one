import DriverRaceSummary from "./DriverRaceSummary";

// This component takes the race results array and create a card with the information needed
function DriverRaceResults({ raceResults }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {raceResults.map((race) => (
                <DriverRaceSummary
                    key={race.id || race.raceName}
                    raceData={race}
                />
            ))}
        </div>
    );
}

export default DriverRaceResults;
