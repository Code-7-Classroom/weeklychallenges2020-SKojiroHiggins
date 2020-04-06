function exercise(str) {
    return function() {
        return `Today's exercise: ${str}`;
    }
}


var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"
