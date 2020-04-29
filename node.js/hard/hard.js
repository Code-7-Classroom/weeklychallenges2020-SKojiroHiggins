let express = require('express');
let app = express();
let data = require('./hard.json');

app.get('/test', function(req, res) {

    res.send("Welcome");

});


app.get('/employees', (req, res) => {

    if (!data) {
        res.status(404).send(`Couldn't find the employees`)
    } else {
        res.send(data);
    }

})

app.get('/employees/:id', (req,res) => {
    const eData = data.employees.find(function(employee){
        return parseInt(req.params.id) === employee.id
    })
    if (!eData){
        res.status(404).send(`Couldnt find the employee id`)
    }
    res.send(eData)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});