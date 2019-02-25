let employees.js = require('../data/employees.js');

module.exports = function (app) {

    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });

    app.post('/api/employees', function (req, res) {
        res.json(employees);
    });
}