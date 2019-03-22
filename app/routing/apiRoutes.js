let employees = require('../data/employees');

module.exports = function (app) {

    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });

    app.post('/api/employees', function (req, res) {
        const newEmployee = {
            name:'',
            photo:'',
        };

        const user = req.body;
        const scores = user.scores
        console.log(user)
    });
}