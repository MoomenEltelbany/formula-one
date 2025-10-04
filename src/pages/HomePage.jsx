import Hero from "../ui/Hero";
import HomeStatCards from "../ui/HomeStatCards";
import HomeLeader from "../ui/HomeLeader";
import HomePodium from "../ui/HomePodium";
import HomeRace from "../ui/HomeRace";

function HomePage() {
    return (
        <div className="bg-black">
            <Hero />
            <HomeStatCards />
            <HomeLeader />
            <HomePodium />
            <HomeRace />
        </div>
    );
}

export default HomePage;
