/**
 * Created by ismol on 05/02/2016.
 */
var customersApp = angular.module('customersApp', ['ngRoute']);

customersApp.config(function ($routeProvider) {

    $routeProvider
        .when('/',
            {
                controller: 'CustomersController',
                templateUrl: 'Views/customers.html'
            })
        .when('/customerorders', // /:customerID
            {
                controller: 'CustomerOrdersController',
                templateUrl: 'Views/customerorders.html'
            })
        .when('/orders',
            {
                controller: 'OrdersController',
                templateUrl: 'Views/orders.html'
            })
        .otherwise({redirectTo: '/'});

    }
);