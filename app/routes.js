/**
 * Created by ismol on 09/02/2016.
 */

// app/routes.js
//JSON.stringify( response.data, null, 2)
var Customer = require('./models/customer');

var Order = require('./models/order');

module.exports = function (app) {

    app.get('/api/customers', function (req, res) {

        // use mongoose to get all customers in the database
        Customer.find(function (err, customers) {

            if (err)
                res.send(err);

            res.json(customers); // return all customers in JSON format
        });
    });

    app.post('/api/customers', function (req, res) {


        //console.log("req.body: " + JSON.stringify(req.body, null, 2));

        //var customer = JSON.parse ( "[
        //{
        //    "firstname": "Firstname",
        //    "lastname": "Lastname",
        //    "city": "City"
        //}
        //]");

        var customer = JSON.parse(req.body);

        console.log("customer.firstname: " + customer.firstname);
        console.log("customer.lastname: " + customer.lastname);
        console.log("customer.city: " + customer.city);



        var newCustomer = new Customer();
        newCustomer.firstname = req.body.firstname;
        newCustomer.lastname = req.body.lastname;
        newCustomer.city = req.body.city;

        //console.log("newCustomer.firstname: " + newCustomer.firstname);
        //console.log("newCustomer.lastname: " + newCustomer.lastname);
        //console.log("newCustomer.city: " + newCustomer.city);

        //save the customer
        //newCustomer.save(function (err) {
        //    if (err) res.send(err);
        //
        //    res.send("success");
        //});

    });

    app.delete('/api/customers/:customerId', function (req, res) {

        Customer.remove({_id: req.params.customerId}, function (err, Customer) {
            if (err)
                res.send(err);

            res.json({message: 'Successfully deleted'});
        });
    });

    app.get('/api/orders', function (req, res) {

        Order.find(function (err, orders) {
            if (err)
                res.send(err);

            res.json(orders);
        });
    });

    app.get('*', function (req, res) {
        res.sendfile('./public/views/index.html');
    });

};