class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job; 
        this.age = age;
    }

    exercise() {
        console.log('Running is fun! - said no one ever.');
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}.`)
    }
}

class Programmer extends Person {
    constructor(name, job, age, languages, busy = true) {
        super(name, job, age);
        this.languages = languages;
        this.busy = busy; 
    }   

    completeTask() {
        this.busy = false; 
    }

    acceptNewTask() {
        this.busy = true; 
    }

    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on the new responsibility.`);
        }
    }

    learnLanguage(language) {
        this.languages.push(language);
    }   
    
    listLanguages() {
        this.languages.forEach(element => console.log(element));
    }
}

// test 1
const john = new Person('John', 'Teacher', '25');
// test 2
john.exercise();
// test 3
john.fetchJob();
// test 4
const mark = new Programmer('Mark', 'Programmer', 30, ['Java', 'JavaScript']);
// test 5 and 6
mark.offerNewTask();
mark.completeTask();
mark.offerNewTask();
mark.acceptNewTask();
// test 7
mark.learnLanguage('Ruby')
mark.listLanguages();
// test 8
const jane = new Programmer('Jane', 'Programmer', 23, ['HTML', 'CSS', 'Python']);
jane.fetchJob();
jane.learnLanguage('C++');
jane.listLanguages();
jane.offerNewTask();






