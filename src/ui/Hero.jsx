import { Link } from "react-router-dom";
import Hyperspeed from "./animations/Hyperspeed";

function Hero() {
    return (
        <div className="h-[90vh] w-full relative left-0 bottom-0 overflow-hidden mx-auto">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                <h1 className="text-red-600 text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
                    🏎️ Welcome to F1 Dashboard
                </h1>
                <p className="my-20 text-2xl md:text-3xl lg:text-4xl font-title font-bold text-white uppercase">
                    Track every race, driver, and team
                </p>
                <div className=" space-x-10">
                    <Link
                        to="/drivers"
                        className="bg-red-600/90 hover:bg-white hover:text-red-600 py-3 px-6 rounded-lg font-body font-bold text-lg cursor-pointer transition-all duration-300"
                    >
                        View Drivers
                    </Link>
                    <Link
                        to="/standings"
                        className="bg-red-600/90 hover:bg-white hover:text-red-600 py-3 px-6 rounded-lg font-body font-bold text-lg cursor-pointer transition-all duration-300"
                    >
                        View Standings
                    </Link>
                </div>
            </div>
            <Hyperspeed
                effectOptions={{
                    onSpeedUp: () => {},
                    onSlowDown: () => {},
                    distortion: "turbulentDistortion",
                    length: 400,
                    roadWidth: 10,
                    islandWidth: 2,
                    lanesPerRoad: 4,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 2,
                    carLightsFade: 0.4,
                    totalSideLightSticks: 20,
                    lightPairsPerRoadWay: 40,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.1,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [0.12, 0.5],
                    lightStickHeight: [1.3, 1.7],
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [400 * 0.03, 400 * 0.2],
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.8, 0.8],
                    carFloorSeparation: [0, 5],
                    colors: {
                        roadColor: 0x080808,
                        islandColor: 0x0a0a0a,
                        background: 0x000000,
                        shoulderLines: 0xffffff,
                        brokenLines: 0xffffff,
                        leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                        rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                        sticks: 0x03b3c3,
                    },
                }}
            />
        </div>
    );
}

export default Hero;
