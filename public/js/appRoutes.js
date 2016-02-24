/**
 * Created by ismol on 10/02/2016.
 */
//angular.module('appRoutes', [])

customersApp.config(['$routeProvider', function ($routeProvider) {
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
}]);