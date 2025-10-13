export function getDriverSeasonSummary(driver, position, points, wins) {
    const fullName = `${driver.name} ${driver.surname}`;

    if (position <= 3) {
        return `With ${points} points and ${wins} victories so far this season, ${fullName} is holding a commanding position in the standings — currently sitting in position n°${position}. His ability to consistently deliver high-level performances has kept him firmly in the spotlight, as he continues to challenge the front-runners and push the limits of what's possible on race day.`;
    }

    if (position > 3 && position <= 10) {
        return `With ${points} points and a string of competitive finishes, ${fullName} currently holds position n°${position} in the championship standings. His season has been marked by consistency and resilience, keeping him well within reach of the leaders and firmly in the mix for podium contention.`;
    }

    return `With ${points} points to his name, ${fullName} sits in position n°${position} in the standings — a position that reflects steady effort and determination throughout the season. While not yet among the front-runners, his performances show promise and potential for climbing higher as the season unfolds.`;
}
