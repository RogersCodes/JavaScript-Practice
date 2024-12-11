const races = ["👨", "👨🏻", "👨🏼", "👨🏽", "👨🏿"];

const sortByRace = (a, b) => {
    const raceOrder = { "👨": 1, "👨🏻": 2, "👨🏼": 3, "👨🏽": 4, "👨🏿": 5 };
    const skinTone = races.slice(-1);
    return raceOrder[skinTone] || 0;
};
console.log("Sorted Races:", sortedEmojis);