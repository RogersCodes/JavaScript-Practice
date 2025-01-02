function dominantDirection(text) {
    function countBy(items, groupName) {
      let counts = [];
      for (let item of items) {
        let name = groupName(item);
        let known = counts.find(c => c.name === name);
        if (known) {
          known.count++;
        } else {
          counts.push({ name, count: 1 });
        }
      }
      return counts;
    }
  
    const SCRIPTS = [
        {
            name: "Latin",
            ranges: [[0x0000, 0x007F], [0x0080, 0x00FF]],
            direction: "ltr",
            year: 2010,
            living: true,
            link: "https://en.wikipedia.org/wiki/Latin_script_in_Unicode"
        }
    ]
    function characterScript(code) {
      for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
          return code >= from && code < to;
        })) {
          return script;
        }
      }
      return null;
    }
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({ name }) => name !== "none");
    if (scripts.length === 0) return "ltr";
    return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
  }
  console.log(dominantDirection("Hello!"));
  console.log(dominantDirection("Hey, مساء الخير"));
  