import Hero from "../ui/Hero";
import HomeStatCards from "../ui/HomeStatCards";
import HomeLeader from "../ui/HomeLeader";
import HomePodium from "../ui/HomePodium";
import HomeExploreSection from "../ui/HomeExploreSection";
import NextRace from "../features/races/NextRace";
import { useLoaderData } from "react-router-dom";

function HomePage() {
    const { drivers, currentChampion } = useLoaderData();

    return (
        <div className="bg-black">
            <Hero />
            <HomeStatCards
                drivers={drivers}
                currentChampion={currentChampion}
            />
            <HomeLeader />
            <HomePodium />
            <NextRace />
            <HomeExploreSection />
        </div>
    );
}

export default HomePage;
