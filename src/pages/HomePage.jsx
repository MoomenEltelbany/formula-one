import Hero from "../ui/Hero";
import HomeStatCards from "../ui/HomeStatCards";
import HomeLeader from "../ui/HomeLeader";
import HomePodium from "../ui/HomePodium";
import HomeExploreSection from "../ui/HomeExploreSection";
import NextRace from "../features/races/NextRace";
import { useLoaderData } from "react-router-dom";

function HomePage() {
    const { drivers, currentChampions, teams, currentTopTeam, raceData } =
        useLoaderData();

    return (
        <div className="bg-black">
            <Hero />
            <HomeStatCards
                drivers={drivers}
                currentChampions={currentChampions}
                teams={teams}
                currentTopTeam={currentTopTeam}
                raceData={raceData}
            />
            <HomeLeader currentChampions={currentChampions} />
            <HomePodium currentChampions={currentChampions} />
            <NextRace />
            <HomeExploreSection />
        </div>
    );
}

export default HomePage;
