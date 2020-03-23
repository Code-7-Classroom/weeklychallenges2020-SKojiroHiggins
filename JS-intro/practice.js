/*
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver': 
        console.log(firstName + ' drives an uber in Lisbon.');
        break
    case 'designer': 
        console.log(firstName + ' designs beautriful websites.')
        break
    default:
        console.log(firstName + ' does something else.')
}
*/

/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
console.log(ageJohn, ageMike);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age; 
    console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1990, 'John');
*/


/*
// Function expression
var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'designer':
            return firstName + ' drives a cab in Lisbon.';
        default:

    }
}
console.log(whatDoYouDo('teacher', 'John'));
*/

/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[1])
*/

/*
var john = {
    firstName: 'John', // property of the john object
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
*/

/*
var john = {
    firstName: 'John', // property of the john object
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        return 2018 - birthYear;
    }
};
*/

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++
}



















