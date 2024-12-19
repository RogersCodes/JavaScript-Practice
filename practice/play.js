const print = "What is your favorite activity?"
.split("")
.map(parseInt)
.filter(a => a)
.reduce((a, b) => a + b)
console.log(print)