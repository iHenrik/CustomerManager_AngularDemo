/**
 * Created by ismol on 05/02/2016.
 */
var customersApp = angular.module('customersApp', ['ngRoute']);

customersApp.config(function ($routeProvider) {

    $routeProvider
        .when('/',
            {
                controller: 'CustomersController',
                templateUrl: 'views/customers.html'
            })
        .when('/customerorders/:customerId',
            {
                controller: 'CustomerOrdersController',
                templateUrl: 'views/customerOrders.html'
            })
        .when('/orders',
            {
                controller: 'OrdersController',
                templateUrl: 'views/orders.html'
            })
        .otherwise({redirectTo: '/'});

    }
);