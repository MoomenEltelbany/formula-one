export const mockRaces = [
    {
        id: 1,
        round: 1,
        raceName: "Bahrain Grand Prix",
        circuitName: "Bahrain International Circuit",
        location: "Sakhir",
        country: "Bahrain",
        flag: "🇧🇭",
        date: "2025-12-02",
        status: "completed", // "completed", "upcoming", "next"
        winner: "Max Verstappen",
        winnerTeam: "Red Bull Racing",
        circuitImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bahrain_International_Circuit--Grand_Prix_Layout.svg/1920px-Bahrain_International_Circuit--Grand_Prix_Layout.svg.png",
        countryFlag: "https://flagcdn.com/w320/bh.png",
    },
    {
        id: 2,
        round: 2,
        raceName: "Saudi Arabian Grand Prix",
        circuitName: "Jeddah Corniche Circuit",
        location: "Jeddah",
        country: "Saudi Arabia",
        flag: "🇸🇦",
        date: "2024-03-09",
        status: "completed",
        winner: "Max Verstappen",
        winnerTeam: "Red Bull Racing",
        circuitImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2022_F1_CourseLayout_Australia.svg/1920px-2022_F1_CourseLayout_Australia.svg.png",
    },
    {
        id: 3,
        round: 3,
        raceName: "Australian Grand Prix",
        circuitName: "Albert Park Circuit",
        location: "Melbourne",
        country: "Australia",
        flag: "🇦🇺",
        date: "2024-03-24",
        status: "completed",
        winner: "Carlos Sainz",
        winnerTeam: "Ferrari",
        circuitImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2022_F1_CourseLayout_Australia.svg/1920px-2022_F1_CourseLayout_Australia.svg.png",
    },

    {
        id: 19,
        round: 19,
        raceName: "Singapore Grand Prix",
        circuitName: "Marina Bay Street Circuit",
        location: "Singapore",
        country: "Singapore",
        flag: "🇸🇬",
        date: "2025-09-21",
        status: "next", // The NEXT upcoming race
        winner: null,
        winnerTeam: null,
        circuitImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bahrain_International_Circuit--Grand_Prix_Layout.svg/1920px-Bahrain_International_Circuit--Grand_Prix_Layout.svg.png",
    },
    {
        id: 24,
        round: 24,
        raceName: "Abu Dhabi Grand Prix",
        circuitName: "Yas Marina Circuit",
        location: "Abu Dhabi",
        country: "UAE",
        flag: "🇦🇪",
        date: "2025-12-08",
        status: "upcoming",
        winner: null,
        winnerTeam: null,
        circuitImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bahrain_International_Circuit--Grand_Prix_Layout.svg/1920px-Bahrain_International_Circuit--Grand_Prix_Layout.svg.png",
    },
];

// export function getCircuitImage = {

// }

// Helper: Get next race
export const getNextRace = (races, completedRaces) => {
    return races[completedRaces];
};

// Helper: Get upcoming races
export const getUpcomingRaces = () => {
    return mockRaces.filter(
        (race) => race.status === "upcoming" || race.status === "next"
    );
};

// Helper: Get completed races
export const getCompletedRaces = (allRaces) =>
    allRaces.races.filter((race) => race.winner !== null).length;

export function getRacesByStatus(status) {
    if (status === "all") return mockRaces;
    if (status === "completed") return getCompletedRaces();
    if (status === "upcoming") return getUpcomingRaces();
}

// Helper: Calculate days until race
export const getDaysUntil = (raceDate) => {
    const today = new Date();
    const race = new Date(raceDate);
    const diffTime = race - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

/*
    - Function that fetch all the races in the calendar
        . races: The whole information about races
        .  completedRacesCount: To know how many races have been completed till the moment
        . nextRaceName: To display the name of the next race in the home page
        . nextRaceData: To fetch the whole data of the next Race and we do this to get everything from raceDate, raceName, circuitName, how many days left till the next race
*/

export async function fetchAllRaces() {
    const res = await fetch("api/2025");
    if (!res.ok) throw new Error("Failed to fetch the races");

    const races = await res.json();
    let completedRacesCount = getCompletedRaces(races);

    // Here I added this manually because the API is omitting the results of the race number 6, the API is giving null to everything and this is ruining all my logic for race number, next race and everything, that's why I added here on manually
    completedRacesCount++;

    const nextRaceData = races.races[completedRacesCount];

    const nextRaceName = nextRaceData
        ? nextRaceData.circuit.circuitName
        : "Season Complete";

    return { races, completedRacesCount, nextRaceName, nextRaceData };
}

export async function fetchRaceById(id) {
    const res = await fetch(`api/circuits/${id}`);

    if (!res.ok) throw new Error("The race could not be fetched");

    const data = await res.json();

    return data.circuit[0];
}
