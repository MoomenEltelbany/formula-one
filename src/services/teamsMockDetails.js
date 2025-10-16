// export const mockTeams = [
//     {
//         teamId: "1124",
//         constructorId: "alpine",
//         url: "http://en.wikipedia.org/wiki/Alpine_F1_Team",
//         name: "Alpine F1 Team",
//         nationality: "French",
//         points: "30",
//         position: "10",
//         drivers: ["Pierre Gasly", "Franco Colapinto"],
//         teamColor: "#025BA8",
//         image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Logo_of_alpine_f1_team_2022.png",
//     },
//     {
//         teamId: "1154",
//         constructorId: "aston_martin",
//         url: "http://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One",
//         name: "Aston Martin",
//         nationality: "British",
//         points: "40",
//         position: "9",
//         drivers: ["Fernando Alonso", "Lance Stroll"],
//         teamColor: "#015c67",
//         image: "https://upload.wikimedia.org/wikipedia/en/1/15/Aston_Martin_Aramco_2024_logo.png",
//     },
//     {
//         teamId: "1123",
//         constructorId: "ferrari",
//         url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
//         name: "Ferrari",
//         nationality: "Italian",
//         points: "180",
//         position: "3",
//         drivers: ["Lewis Hamilton", "Charles Leclerc"],
//         teamColor: "#dc0000",
//         image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Scuderia_Ferrari_HP_logo_24.svg/2880px-Scuderia_Ferrari_HP_logo_24.svg.png",
//     },
//     {
//         teamId: "1024",
//         constructorId: "haas",
//         url: "http://en.wikipedia.org/wiki/Haas_F1_Team",
//         name: "Haas F1 Team",
//         nationality: "American",
//         points: "50",
//         position: "8",
//         drivers: ["Oliver Bearman", "Esteban Ocon"],
//         teamColor: "#f7fbfe",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/MoneyGram_Haas_F1_Team_Logo.svg/2880px-MoneyGram_Haas_F1_Team_Logo.svg.png",
//     },
//     {
//         teamId: "1194",
//         constructorId: "mclaren",
//         url: "http://en.wikipedia.org/wiki/McLaren",
//         name: "McLaren",
//         nationality: "British",
//         points: "650",
//         position: "1",
//         drivers: ["Lando Norris", "Oscar Piastri"],
//         teamColor: "#FF8100",
//         image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_Racing_logo.svg/500px-McLaren_Racing_logo.svg.png",
//     },
//     {
//         teamId: "2124",
//         constructorId: "mercedes",
//         url: "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
//         name: "Mercedes",
//         nationality: "German",
//         points: "280",
//         position: "2",
//         drivers: ["George Russell", "Kimi Antonelli"],
//         teamColor: "#00d2be",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_in_Formula_One_logo.svg/2880px-Mercedes-Benz_in_Formula_One_logo.svg.png",
//     },
//     {
//         teamId: "3124",
//         constructorId: "rb",
//         url: "http://en.wikipedia.org/wiki/RB_Formula_One_Team",
//         name: "RB F1 Team",
//         nationality: "Italian",
//         points: "80",
//         position: "6",
//         drivers: ["Liam Lawson", "Isack Hadjar"],
//         teamColor: "#0B31CB",
//         image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/VCARB_F1_logo.svg/2880px-VCARB_F1_logo.svg.png",
//     },
//     {
//         teamId: "1424",
//         constructorId: "red_bull",
//         url: "http://en.wikipedia.org/wiki/Red_Bull_Racing",
//         name: "Red Bull",
//         nationality: "Austrian",
//         points: "160",
//         position: "4",
//         drivers: ["Max Verstappen", "Yuki Tsunoda"],
//         teamColor: "#1f2c40",
//         image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_bull_racing.png",
//     },
//     {
//         teamId: "9124",
//         constructorId: "sauber",
//         url: "http://en.wikipedia.org/wiki/Sauber_Motorsport",
//         name: "Sauber",
//         nationality: "Swiss",
//         points: "100",
//         position: "5",
//         drivers: ["Nico Hülkenberg", "Gabriel Bortoleto"],
//         teamColor: "#31D569",
//         image: "https://upload.wikimedia.org/wikipedia/commons/d/de/2023_Stake_F1_Team_Kick_Sauber_logo.png",
//     },
//     {
//         teamId: "1824",
//         constructorId: "williams",
//         url: "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
//         name: "Williams",
//         nationality: "British",
//         points: "90",
//         position: "7",
//         drivers: ["Carlos Sainz", "Alexander Albon"],
//         teamColor: "#1168dc",
//         image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Atlassian_Williams_Racing_2025.svg/2880px-Atlassian_Williams_Racing_2025.svg.png",
//     },
// ];

const constructorImages = {
    mclaren:
        "https://media.gettyimages.com/id/1238737260/photo/f1-winter-testing-in-barcelona-day-2.jpg?s=1024x1024&w=gi&k=20&c=4Mujh_0lSLFwLCW0IDYj0Fw6_wATrlNwkiXnrZn5YGc=",
    red_bull:
        "https://upload.wikimedia.org/wikipedia/en/4/44/Red_bull_racing.png",
    haas: "https://media.gettyimages.com/id/2153677544/photo/f1-grand-prix-of-monaco-previews.jpg?s=1024x1024&w=gi&k=20&c=ysmjB_zX74DFfhGEkLYrMjsU65pFf88OPp-K4aPow2A=",
    williams: "/images/teams/williams.svg",
    aston_martin:
        "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/manual/Misc/2021preseason/Aston-Martin-logo.webp",
    mercedes:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/200px-Mercedes_AMG_Petronas_F1_Logo.svg.png",
    ferrari:
        "https://media.gettyimages.com/id/2195087395/photo/lewis-hamilton-tests-for-ferrari.jpg?s=1024x1024&w=gi&k=20&c=i48vSxhg5ZQqb1e1RfvP2SNDhLUaHNZx_f6RRSCL2kI=",
    rb: "https://media.gettyimages.com/id/2210079830/photo/f1-grand-prix-of-saudi-arabia-previews.jpg?s=1024x1024&w=gi&k=20&c=4IID1ZILoJLfk3OZW38EpycO1u3XUTfVdj48et7rfWU=",
    sauber: "https://media.gettyimages.com/id/2174006919/photo/formula-one-testing-preparations-jerez-spain-monday-27-january-2014.jpg?s=1024x1024&w=gi&k=20&c=Yct-E6_0uiae7bgCfqwyQU11Bl3tqwtzqeYk_ZdFTzo=",
    alpine: "https://media.gettyimages.com/id/2037139608/photo/bahrain-grand-prix-preview-day-bahrain-international-circuit.jpg?s=1024x1024&w=gi&k=20&c=WbPyoBMG8Ki7BTYJXsJ0AmbPY-S_rWldSqiRi6Irr1s=",
};

// Function that take the teams's ID and bring back the logo of the team from the constructorImages object
export function getTeamLogo(name) {
    return constructorImages[name];
}

export async function fetchAllTeams() {
    const res = await fetch("/api/current/teams");

    if (!res.ok) throw new Error("Failed to fetch current teams");

    const data = await res.json();

    return data;
}

export async function fetchTeamChampionshipStats() {
    const res = await fetch("/api/current/constructors-championship");

    if (!res.ok) throw new Error("Failed to fetch the top team");

    const data = await res.json();

    return data;
}

export async function fetchTeamsDrivers(id) {
    const res = await fetch(`/api/current/teams/${id}/drivers`);

    if (!res.ok) throw new Error("Drivers couldn't be fetched");

    const data = await res.json();

    return data;
}
