function filter(arr, fn) {
    let filteredArr = [];
    fn = function greaterThan10(n) { return n > 10; }; 
    arr = [0,10,20,30];
    for(let i=0; i<arr.length; i++) {
        if(fn(arr[i], i)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

//without the Array.filter method