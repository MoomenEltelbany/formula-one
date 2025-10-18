const driversImages = {
    "Oscar Piastri":
        "https://media.gettyimages.com/id/2172131554/photo/f1-grand-prix-of-azerbaijan.jpg?s=1024x1024&w=gi&k=20&c=WAYXKC9bzV4KfzkUmiAACK_4NSBPL6alDSi11UpdLeQ=",
    "Lando Norris":
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3975_by_Stepro_%28cropped2%29.jpg/500px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3975_by_Stepro_%28cropped2%29.jpg",
    "Lewis Hamilton":
        "https://media.gettyimages.com/id/2226794707/photo/f1-grand-prix-of-belgium-previews.jpg?s=1024x1024&w=gi&k=20&c=B9Yw1HvoMqbXP6B6BL0JUcHKBvIJ2yeB69hXbDWsxx4=",
    "Max Verstappen":
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg/1280px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg",
    "George Russell":
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/KingsLeonSilverstne040724_%2828_of_112%29_%2853838006028%29_%28cropped%29.jpg/1280px-KingsLeonSilverstne040724_%2828_of_112%29_%2853838006028%29_%28cropped%29.jpg",
    "Charles Leclerc":
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg/1280px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg",
    "Andrea Kimi Antonelli":
        "https://media.gettyimages.com/id/2220297608/photo/f1-grand-prix-of-canada.jpg?s=1024x1024&w=gi&k=20&c=YMKr9wMnjPmSWSNRL2Y5hcIUzA4UZGu38hR-ol7JC20=",
    "Alex Albon":
        "https://media.gettyimages.com/id/2209253535/photo/f1-grand-prix-of-bahrain-practice.jpg?s=1024x1024&w=gi&k=20&c=3WAsvDHbE5DPP5MKK9frxxi_WVwwZi22aTb4tYpZt-U=",
    "Isack Hadjar":
        "https://media.gettyimages.com/id/2233019068/photo/f1-grand-prix-of-netherlands.jpg?s=1024x1024&w=gi&k=20&c=xOw7llCsbCy7dBzyOT5pMTYS5On183OrquTbmHTLJlw=",
    "Nico Hulkenberg":
        "https://media.gettyimages.com/id/2223818229/photo/f1-grand-prix-of-great-britain.jpg?s=1024x1024&w=gi&k=20&c=3-sUdtDk01WOPfc5CCW8VuUnIjHw1kjlYAtOVA6MgTQ=",
    "Lance Stroll":
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2025_Japan_GP_-_Aston_Martin_-_Lance_Stroll_-_Fanzone_Stage_%28cropped%29.jpg/1280px-2025_Japan_GP_-_Aston_Martin_-_Lance_Stroll_-_Fanzone_Stage_%28cropped%29.jpg",
    "Carlos Sainz":
        "https://media.gettyimages.com/id/2202024588/photo/formula-1-testing-in-bahrain-day-1.jpg?s=1024x1024&w=gi&k=20&c=htdxMJuy7ZgdSgL8u3pxpRxjiiu4WO8jDl35XIC4Ces=",
    "Liam Lawson":
        "https://media.gettyimages.com/id/2222617911/photo/f1-grand-prix-of-austria-qualifying.jpg?s=1024x1024&w=gi&k=20&c=6VphvpGjr9R36Ix3EBJ54xJR8YQoIOX4XArlmNlTkVs=",
    "Fernando Alonso":
        "https://media.gettyimages.com/id/2208729848/photo/f1-grand-prix-of-japan.jpg?s=1024x1024&w=gi&k=20&c=QvC1TtP86pMxYk9g98reHy94YuWqNMPNd8qT8mfW55Y=",
    "Esteban Ocon":
        "https://media.gettyimages.com/id/2202023158/photo/formula-1-testing-in-bahrain-day-1.jpg?s=1024x1024&w=gi&k=20&c=-HzorQeTMPPxXyfhqnq15yIr9q6m8Ljyyv7dFFLGa5M=",
    "Pierre Gasly":
        "https://media.gettyimages.com/id/2068751820/photo/f1-grand-prix-of-saudi-arabia-qualifying.jpg?s=1024x1024&w=gi&k=20&c=pMgZ2iTSKy4fLAQPUPYhgI5St_4LD85iVBI6954hfFo=",
    "Yuki Tsunoda":
        "https://media.gettyimages.com/id/2208077006/photo/oracle-red-bull-racing-show-run-in-tokyo.jpg?s=1024x1024&w=gi&k=20&c=moLcGfaBaDRMjbKoNF9PaRLRiR0UQxBbnqUoRZmzg8Y=",
    "Gabriel Bortoleto":
        "https://media.gettyimages.com/id/2204660991/photo/f1-grand-prix-of-australia-previews.jpg?s=1024x1024&w=gi&k=20&c=oNvtchzEJzHVjIcKc0P57j_KtFmMuG7JkLueZEoD80s=",
    "Oliver Bearman":
        "https://media.gettyimages.com/id/2160590389/photo/oliver-bearman-signs-haas-f1-contract.jpg?s=1024x1024&w=gi&k=20&c=wuuGNuCOhoSx0pBKNmcg2GpfglQ6bTGue2BH7-FXiuc=",
    "Franco Colapinto":
        "https://media.gettyimages.com/id/2206453956/photo/f1-grand-prix-of-china.jpg?s=1024x1024&w=gi&k=20&c=ua2it8Qtrgzf-_JpdI5owDYeBoPn-chOM8fl_x7zcjY=",
    "Jack Doohan":
        "https://media.gettyimages.com/id/2202024833/photo/formula-1-testing-in-bahrain-day-1.jpg?s=1024x1024&w=gi&k=20&c=Q3DgNMxCrvpmG4NXxDT8nAJ1-Yo2xHlZ6wd-DiKH9No=",
};

const constructorImages = {
    mclaren:
        "https://media.gettyimages.com/id/1238737260/photo/f1-winter-testing-in-barcelona-day-2.jpg?s=1024x1024&w=gi&k=20&c=4Mujh_0lSLFwLCW0IDYj0Fw6_wATrlNwkiXnrZn5YGc=",
    red_bull:
        "https://upload.wikimedia.org/wikipedia/en/4/44/Red_bull_racing.png",
    haas: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Haas_F1_Team_Logo.svg/200px-Haas_F1_Team_Logo.svg.png",
    williams:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Williams_Racing_logo.svg/200px-Williams_Racing_logo.svg.png",
    aston_martin:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Aston_Martin_Aramco_Cognizant_F1.svg/200px-Aston_Martin_Aramco_Cognizant_F1.svg.png",
    mercedes:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg/200px-Mercedes_AMG_Petronas_F1_Logo.svg.png",
    ferrari:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Scuderia_Ferrari_Logo.svg/200px-Scuderia_Ferrari_Logo.svg.png",
    "racing bulls":
        "https://media.gettyimages.com/id/2210079830/photo/f1-grand-prix-of-saudi-arabia-previews.jpg?s=1024x1024&w=gi&k=20&c=4IID1ZILoJLfk3OZW38EpycO1u3XUTfVdj48et7rfWU=",
    sauber: "https://media.gettyimages.com/id/2174006919/photo/formula-one-testing-preparations-jerez-spain-monday-27-january-2014.jpg?s=1024x1024&w=gi&k=20&c=Yct-E6_0uiae7bgCfqwyQU11Bl3tqwtzqeYk_ZdFTzo=",
    alpine: "https://media.gettyimages.com/id/2037139608/photo/bahrain-grand-prix-preview-day-bahrain-international-circuit.jpg?s=1024x1024&w=gi&k=20&c=WbPyoBMG8Ki7BTYJXsJ0AmbPY-S_rWldSqiRi6Irr1s=",
};

// Function that take the driver's full name and bring back his photo from the driversImages object
export function getDriverImage(name) {
    return driversImages[name];
}

// Function that take the teams's ID and bring back the logo of the team from the constructorImages object
export function getDriverTeamLogo(name) {
    return constructorImages[name];
}

/*
    Fetches all the drivers of the current year
 */
export async function fetchAllDrivers() {
    const res = await fetch("/api/current/drivers");

    if (!res.ok) throw new Error("Failed to fetch the drivers");

    const data = await res.json();

    return data;
}

/*
    Fetches the top 5 drivers in the championship and returns:
        - championshipLeader: the driver currently leading in points
        - topWinner: the driver with the most wins
 */
export async function fetchDriverChampionshipStats() {
    const res = await fetch("/api/current/drivers-championship");

    if (!res.ok) throw new Error("Failed to fetch the current champion");

    const data = await res.json();

    const topThreeDrivers = data["drivers_championship"].slice(0, 3);

    const topWinner = data["drivers_championship"].reduce((top, driver) =>
        driver.wins > top.wins ? driver : top
    );
    return {
        data,
        currentLeader: data["drivers_championship"][0],
        topWinner,
        topThreeDrivers,
    };
}

// A function that takes the ID of the driver and retrieve all the necessary information about that specific driver

export async function fetchDriverById(id) {
    const res = await fetch(`/api/current/drivers/${id}`);

    if (!res.ok) throw new Error("Driver couldn't be fetched");

    const data = res.json();

    return data;
}
