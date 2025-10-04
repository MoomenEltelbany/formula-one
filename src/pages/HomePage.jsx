import Hero from "../ui/Hero";
import HomeStatCards from "../ui/HomeStatCards";
import HomeLeader from "../ui/HomeLeader";
import HomePodium from "../ui/HomePodium";
import HomeRace from "../ui/HomeRace";
import HomeExploreSection from "../ui/HomeExploreSection";

function HomePage() {
    return (
        <div className="bg-black">
            <Hero />
            <HomeStatCards />
            <HomeLeader />
            <HomePodium />
            <HomeRace />
            <HomeExploreSection />
        </div>
    );
}

export default HomePage;
