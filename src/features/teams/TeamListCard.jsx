import { Link } from "react-router-dom";
import { getTeamLogo } from "../../services/teamsMockDetails";

function TeamListCard({ constructor }) {
    const { points, position, team, wins, teamId } = constructor;

    // console.log(team);

    const { country, teamName } = team;

    const image = getTeamLogo(teamId);

    return (
        <div
            key={team.constructorId}
            className="relative bg-black rounded-xl overflow-hidden shadow-md transition-shadow duration-300 flex flex-col h-full"
        >
            <div className="p-6 flex flex-col items-center flex-grow">
                <div className="w-28 h-28 rounded-full border-4 overflow-hidden flex items-center justify-center bg-white">
                    <img
                        src={image}
                        alt={`${teamName} Constructor Photo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                    />
                </div>

                <h3 className="text-xl font-semibold mt-4 mb-1">{teamName}</h3>
                <p className="text-sm text-gray-400 mb-2">
                    #{position} • {country}
                </p>

                <div className="flex justify-center gap-4 mt-4 text-sm">
                    <span>🏁 {points} pts</span>
                    <span>•</span>
                    <span>Pos {position}</span>
                </div>
                <p className="text-center my-2">{wins} wins</p>

                {/* The constructorId will be teamId we will get from an API but I am putting this as a placeholder for now */}
                <Link
                    to={`/teams/${teamId}`}
                    className="mt-5 inline-block py-2 px-5 mt-auto rounded-lg bg-red-600 text-slate-200 hover:bg-white hover:text-red-600 font-semibold transition-colors duration-300"
                >
                    View Team's Profile
                </Link>
            </div>
        </div>
    );
}

export default TeamListCard;
