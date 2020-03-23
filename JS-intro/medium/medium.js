var input = prompt("Please enter some text");

if (input === input.toUpperCase()) {
    console.log('User was shouting.');
} else if (input === input.toLowerCase()) {
    console.log('User was whispering.');
} else {
    console.log('User was speaking normally.');
}