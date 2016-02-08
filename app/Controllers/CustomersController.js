/**
 * Created by ismol on 05/02/2016.
 */

customersApp.controller('CustomersController', function ($scope, customersFactory, ordersFactory) {

        Init();

        function Init() {
            var tempCustomers = customersFactory.getCustomers();

            for (i = 0; i < tempCustomers.length; i++) {
                tempCustomers[i].orderCount = ordersFactory.getCustomerOrderCount(tempCustomers[i].id);
            }

            $scope.customers = tempCustomers;
        }

        $scope.addCustomer = function () {

            customersFactory.addCustomer(
                $scope.newCustomer.firstname,
                $scope.newCustomer.lastname,
                $scope.newCustomer.city);

            $scope.newCustomer.firstname = '';
            $scope.newCustomer.lastname = '';
            $scope.newCustomer.city = '';
        };

        $scope.deleteCustomer = function (customer) {
            var r = confirm("Are you sure to delete customer " + customer.firstname + " " + customer.lastname);

            if (r == true) {
                customersFactory.deleteCustomer(customer.id);
            }
        };
    }
);

customersApp.factory('customersFactory', function () {

    var customers = [
        {id: 1, firstname: 'John', lastname: 'Smith', city: 'New York'},
        {id: 2, firstname: 'John', lastname: ' Doe', city: 'San Francisco'},
        {id: 3, firstname: 'Tracy', lastname: ' Doe', city: 'Montreal'},
        {id: 4, firstname: 'William', lastname: ' Wallace', city: 'Quebec'},
        {id: 5, firstname: 'Jack', lastname: ' Daniels', city: 'Miami'},
        {id: 6, firstname: 'Anna', lastname: ' Smith', city: 'Dallas'}
    ];

    var factory = [];

    factory.getCustomers = function () {
        return customers;
    };

    factory.getCustomer = function (customerId) {

        for (k = 0; k < customers.length; k++) {

            if (customers[k].id == customerId) {
                return customers[k];
                break;
            }
        }
    };

    factory.addCustomer = function (firstname, lastname, city) {
        var newId = 0;

        for (i = 0; i < customers.length; i++) {
            if (customers[i].id >= newId) {
                newId = customers[i].id + 1;
            }
        }

        customers.push(
            {id: newId, firstname: firstname, lastname: lastname, city: city}
        );

        //return customers;
    };

    factory.deleteCustomer = function (customerId) {

        for (i = 0; i < customers.length; i++) {
            if (customers[i].id == customerId) {
                customers.splice(i, 1);
                break;
            }
        }
    };

    return factory;

});