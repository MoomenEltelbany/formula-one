// Helper: Get next race
export const getNextRace = (races, completedRaces) => {
    return races[completedRaces];
};

// Helper: Get completed races
export const getCompletedRaces = (allRaces) =>
    allRaces.races.filter((race) => race.winner !== null).length;

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
    const res = await fetch("/api/2025");
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

// A function that fetch the Race by it's ID and retrieve the needed information about that specific race

export async function fetchRaceById(id) {
    const res = await fetch(`/api/circuits/${id}`);

    if (!res.ok) throw new Error("The race could not be fetched");

    const data = await res.json();

    return data.circuit[0];
}

// This is a function that fetch the data of A completed race, unlike the previous function that retrieve all information about all races, previous and upcoming

export async function fetchCompletedRace(id) {
    const res = await fetch(`/api/${new Date().getFullYear()}/${id}/race`);

    if (!res.ok) throw new Error("The race couldn't be fetched");

    const data = await res.json();

    return data;
}
