import Hero from "../ui/Hero";
import HomeStatCards from "../ui/HomeStatCards";
import HomeLeader from "../ui/HomeLeader";
import HomePodium from "../ui/HomePodium";

function HomePage() {
    return (
        <div className="bg-black">
            <Hero />
            <HomeStatCards />
            <HomeLeader />
            <HomePodium />
        </div>
    );
}

export default HomePage;
