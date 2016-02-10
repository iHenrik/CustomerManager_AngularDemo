/**
 * Created by ismol on 09/02/2016.
 */

// app/routes.js

// grab the customer model we just created
var Customer = require('./models/customer');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    // sample api route
    app.get('/api/customers', function(req, res) {

        //alert("/api/customers");

        // use mongoose to get all customers in the database
        Customer.find(function(err, customers) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(customers); // return all customers in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./views/index.html'); // load our /index.html file
    });

};