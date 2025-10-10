import Hero from "../ui/Hero";
import HomeStatCards from "../ui/HomeStatCards";
import HomeLeader from "../ui/HomeLeader";
import HomePodium from "../ui/HomePodium";
import HomeExploreSection from "../ui/HomeExploreSection";
import NextRace from "../features/races/NextRace";

function HomePage() {
    return (
        <div className="bg-black">
            <Hero />
            <HomeStatCards />
            <HomeLeader />
            <HomePodium />
            <NextRace />
            <HomeExploreSection />
        </div>
    );
}

export default HomePage;
