function loop (initValue, testFn, updateFn, bodyFn) {
    for (let value = initValue; testFn(value); value = updateFn(value)) {
        bodyFn(value);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);