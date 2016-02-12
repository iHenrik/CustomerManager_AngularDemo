/**
 * Created by ismol on 09/02/2016.
 */

// app/routes.js

var Customer = require('./models/customer');

var Order = require('./models/order');

module.exports = function(app) {

    app.get('/api/customers', function(req, res) {

        // use mongoose to get all customers in the database
        Customer.find(function(err, customers) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(customers); // return all customers in JSON format
        });
    });

    app.get('/api/orders', function(req, res) {

        Order.find(function(err, orders) {
            if (err)
                res.send(err);

            res.json(orders);
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests

    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });

};