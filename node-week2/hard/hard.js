// Endpoints
    // POST new employee
        // '/employees'
    // GET all employee data
        // '/employees'
    // GET specific employee data
        // '/employees/:id'
    // PUT updated data
        // '/employees/:id'
    // DELETE employee
        // '/employees/:id'

const express = require('express');
const app = express();
const data = require('./hard.json');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/test', function(req, res) {
    res.send("Welcome");
});

// returns json with informatin from all employees
app.get('/employees', (req, res) => {
    if (!data) {
        res.status(404).send(`Couldn't find the employees`)
    } else {
        res.send(data);
    }

})

// returns json with information from a specific employee
app.get('/employees/:id', (req,res) => {
    const eData = data.employees.find(function(employee){
        return parseInt(req.params.id) === employee.id
    })
    if (!eData){
        res.status(404).send(`Couldnt find the employee id`)
    }
    res.send(eData)
})

// creates new employee on the JSON file
app.post('/employees', (req, res) => {
    if (!data) {
        res.status(404).send(`Couldn't find the employees`) // change
    } else {
        const employeeData = JSON.parse(fs.readFileSync('./hard.json'));
        let userid = employeeData.employees.length + 1;
        let userName = req.body.name;
        let userSalary = req.body.salary;
        let userDepartment = req.body.department;

        employeeData.employees.push( {
            id: userid,
            name: userName,
            salary: userSalary,
            department: userDepartment
        });

        fs.writeFileSync('./hard.json', JSON.stringify(employeeData));
    }
})

// deletes an employee
app.delete('/employees/:id', (req, res) => {
    const eData = data.employees.find(function(employee){
        return parseInt(req.params.id) === employee.id
    })
    if (!eData){
        res.status(404).send(`Couldnt find the employee id`)
    }

    // Delete
    const index = data.employees.indexOf(eData);
    data.employees.splice(index, 1);

    res.send(eData);
});

// updating an employee
app.put('/employees/:id', (req, res) => {
    // look up employee
    // dne, 404
    const eData = data.employees.find(function(employee){
        return parseInt(req.params.id) === employee.id
    })
    if (!eData){
        res.status(404).send(`Couldnt find the employee id`)
    }

    // update employee
    eData.name = req.body.name;
    eData.salary = req.body.salary;
    eData.department = req.body.department;
    // return updated
    res.send(eData)
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});