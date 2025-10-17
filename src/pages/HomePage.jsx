import Hero from "../ui/Hero";
import HomeStatCards from "../ui/HomeStatCards";
import HomeLeader from "../ui/HomeLeader";
import HomePodium from "../ui/HomePodium";
import HomeExploreSection from "../ui/HomeExploreSection";
import NextRace from "../features/races/NextRace";
import { useLoaderData } from "react-router-dom";

function HomePage() {
    const { drivers, currentChampions, teams, currentTeams, raceData } =
        useLoaderData();

    console.log(raceData.nextRaceData);

    return (
        <div className="bg-black">
            <Hero />
            <HomeStatCards
                drivers={drivers}
                currentChampions={currentChampions}
                teams={teams}
                currentTeams={currentTeams}
                raceData={raceData}
            />
            <HomeLeader currentChampions={currentChampions} />
            <HomePodium currentChampions={currentChampions} />
            <NextRace raceData={raceData.nextRaceData} />
            <HomeExploreSection />
        </div>
    );
}

export default HomePage;
