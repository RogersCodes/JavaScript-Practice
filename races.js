const races = ["👨", "👨🏻", "👨🏼", "👨🏽", "👨🏿"];

const sortByRace = (a, b) => {
    const raceOrder = { "👨": 1, "👨🏻": 2, "👨🏼": 3, "👨🏽": 4, "👨🏿": 5 };
    const getSkinTone = (races) => {
        const skinTone = races.slice(-1);
        return raceOrder[skinTone] || 0;
    };

    return getSkinTone(b) - getSkinTone(a);
};
const sortedRaces = races.sort(sortByRace);
console.log("Sorted Races:", sortedRaces);