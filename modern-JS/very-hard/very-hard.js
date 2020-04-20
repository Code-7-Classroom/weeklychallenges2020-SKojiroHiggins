let veryHard = function (string) {
    let tempString = '';
    for (let i = 0; i < string.length; i++) {
        if ((string.indexOf(string.charAt(i), i + 1) == -1) && (tempString.indexOf(string.charAt(i)) == -1)) {
            return string.charAt(i);
        } 
        tempString += string.charAt(i);
    }
}
// test 
console.log(veryHard('the quick brown fox jumps over the calm kitten quietly'));

console.log(veryHard('this hat is the greatest!'));

console.log(veryHard('what a wonderful day it has been!'));


