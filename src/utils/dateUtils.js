export function getRaceCountdown(raceDateString) {
    const raceDate = new Date(raceDateString);
    const today = new Date();

    // Normalize time to avoid timezone issues
    raceDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffInMs = raceDate - today;
    const daysLeft = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    if (daysLeft === 0) {
        return "🏁 The race is today!";
    } else if (daysLeft > 0) {
        return `${daysLeft} day${daysLeft > 1 ? "s" : ""} left`;
    } else {
        return "🏎️ The next race will be announced soon!";
    }
}

export function formateDate(date) {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return formattedDate;
}
