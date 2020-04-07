function exercise(str) {
    return function() {
        return `Today's exercise: ${str}`;
    }
}

// // test 1
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// // test 2
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"
