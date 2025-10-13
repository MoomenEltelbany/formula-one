function DriverInfo({ driver, team, seasonSummary }) {
    return (
        <>
            <p className="text-slate-300 text-lg">{seasonSummary}</p>
            <p className="text-slate-300 text-lg">
                Driving for {team.teamName}, the team is from {team.country}{" "}
                that made its Formula 1 debut in {team.firstAppareance},{" "}
                {driver.surname} represents a legacy of speed and innovation.
                Racing under the number {driver.number} and born in{" "}
                {driver.nationality}, he brings a blend of precision,
                experience, and intensity to every race weekend — contributing
                to the team's pursuit of excellence and championship glory.
            </p>
        </>
    );
}

export default DriverInfo;
