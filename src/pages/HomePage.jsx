import Hero from "../ui/Hero";
import HomeStatCards from "../ui/HomeStatCards";
import HomeLeader from "../ui/HomeLeader";

function HomePage() {
    return (
        <div className="bg-black">
            <Hero />
            <HomeStatCards />
            <HomeLeader />
        </div>
    );
}

export default HomePage;
