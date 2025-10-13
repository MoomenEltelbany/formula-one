import { formatDate } from "../../utils/dateUtils";

function DriverRaceSummary({ raceData }) {
    const { race, result } = raceData;
    return (
        <div className="bg-black rounded-lg shadow-md p-4 border border-slate-700 hover:scale-[1.02] transition-transform">
            <h3 className="text-lg font-bold text-red-400 mb-2">{race.name}</h3>
            <p className="text-slate-300 text-sm">
                <strong>Date:</strong> {formatDate(race.date)} <br />
                <strong>Round:</strong> {race.round} <br />
                <strong>Circuit:</strong> {race.circuit.name} (
                {race.circuit.city}, {race.circuit.country}) <br />
                <strong>Grid Position:</strong> {result.gridPosition} <br />
                <strong>Finish:</strong> {result.finishingPosition} <br />
                <strong>Race Time:</strong> {result.raceTime} <br />
                <strong>Points:</strong> {result.pointsObtained}
            </p>
        </div>
    );
}

export default DriverRaceSummary;
