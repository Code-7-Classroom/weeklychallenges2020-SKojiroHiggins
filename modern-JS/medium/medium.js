let medium = function (array) {
    return array.reduce((a, b) => a + b) / array.length;
}

// test 1
// console.log(medium([1, 4, 7]));

// test 2 
// console.log(medium([10, 5]));

// test 3
// console.log(medium([1.5, 3, 2.5, 1]));