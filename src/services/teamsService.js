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

// Function that fetch all the current teams in the grid
export async function fetchAllTeams() {
    const res = await fetch("/api/current/teams");

    if (!res.ok) throw new Error("Failed to fetch current teams");

    const data = await res.json();

    return data;
}

// Function that fetch the team stats and it's used at any time we want to know the points, position, etc, of a specific team
export async function fetchTeamChampionshipStats() {
    const res = await fetch("/api/current/constructors-championship");

    if (!res.ok) throw new Error("Failed to fetch the top team");

    const data = await res.json();

    return data;
}

// Function that fetch the drivers of each team, based on the teamId
// It has the signal because we will use this function in a useEffect once and we need to AbortController in the cleanup function
export async function fetchTeamsDrivers(id, { signal } = {}) {
    const res = await fetch(`/api/current/teams/${id}/drivers`, { signal });

    if (!res.ok) throw new Error("Drivers couldn't be fetched");

    const data = await res.json();

    return data;
}
