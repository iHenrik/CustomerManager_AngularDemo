/**
 * Created by ismol on 05/02/2016.
 */
    //    console.log(JSON.stringify(response.data, null, 2));
customersApp.controller('CustomersController', function ($scope, $q, CustomerService, OrdersService) {

        Init();

        function Init() {

            CustomerService.getCustomers()
                .then(function (response) {

                    return response.data;
                })
                .then(function (customers) {

                    var customerPromises = [];
                    angular.forEach(customers, function (customer) {
                        customerPromises.push(
                            OrdersService.getOrdersCount(customer.id).then(function (response) {
                                customer.orderCount = response;
                            })
                        );
                    });
                    return $q.all(customerPromises).then(function () {
                        $scope.customers = customers;
                    });
                });
        }

        $scope.addCustomer = function () {

            if ($scope.newCustomer == undefined) {
                alert("Please, enter information for new customer.");
                return;
            }

            var newId = 0;

            for (i = 0; i < $scope.customers.length; i++) {
                if ($scope.customers[i].id >= newId) {
                    newId = $scope.customers[i].id + 1;
                }
            }

            var newCustomer = [{
                "firstname": $scope.newCustomer.firstname,
                "lastname": $scope.newCustomer.lastname,
                "city": $scope.newCustomer.city,
                "id": newId,
            }];

            CustomerService.createCustomer(newCustomer)
                .then(function (response) {
                    Init();
                });

            $scope.newCustomer.firstname = '';
            $scope.newCustomer.lastname = '';
            $scope.newCustomer.city = '';
        };

        $scope.deleteCustomer = function (customer) {
            var r = confirm("Are you sure to delete customer " + customer.firstname + " " + customer.lastname);

            if (r == true) {
                CustomerService.deleteCustomer(customer._id).then(function () {
                    Init();
                });
            }
        };
    }
);
