var person1 = 'John Doe';
var person2 = 'Mark James';
var shorter;

if (person1.length > person2.length) {
    console.log('The name ' + person1 + ' is longer than ' + person2 + ' by ' + (person1.length - person2.length) + ' characters.');
} else if (person2.length > person1.length) {
    console.log('The name ' + person2 + ' is longer than ' + person1 + ' by ' + (person2.length - person1.length) + ' characters.');
}
