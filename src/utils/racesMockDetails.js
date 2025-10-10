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

// Helper: Get next race
export const getNextRace = () => {
    return mockRaces.find((race) => race.status === "next");
};

// Helper: Get upcoming races
export const getUpcomingRaces = () => {
    return mockRaces.filter(
        (race) => race.status === "upcoming" || race.status === "next"
    );
};

// Helper: Get completed races
export const getCompletedRaces = () => {
    return mockRaces.filter((race) => race.status === "completed");
};

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
