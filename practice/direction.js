function dominantDirection(text) {
    // Helper function to count items by a given property
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
  
    // Get script for a character
    function characterScript(code) {
      // Replace this with the actual `characterScript` function or data source
      // Example usage: scriptData.find(script => script.ranges.some(([from, to]) => code >= from && code < to))
      // This is a placeholder implementation.
      return null; // Adjust this as needed for your environment.
    }
  
    // Group characters by their script's direction
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({ name }) => name !== "none");
  
    // Determine the dominant direction
    if (scripts.length === 0) return "ltr"; // Default to "ltr" if no scripts found
    return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
  }
  console.log(dominantDirection("Hello!"));
  console.log(dominantDirection("Hey, مساء الخير"));
  