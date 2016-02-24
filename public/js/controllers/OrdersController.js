/**
 * Created by ismol on 05/02/2016.
 */

customersApp.controller('OrdersController', function ($scope, OrdersService) {

        Init();

        function Init() {
            var result = OrdersService.getOrders();
            result.then(function (response) {

                $scope.orders = response.data;
            })
        }

        //TODO: Create orders

        //TODO: Delete orders
    }
);