/**
 * Created by ismol on 05/02/2016.
 */

customersApp.controller('OrdersController', function ($scope, ordersFactory) {

        Init();

        function Init() {
            $scope.orders = ordersFactory.getOrders();
        }

        $scope.addOrder = function () {

            ordersFactory.addOrder(
                $scope.newOrder.firstname,
                $scope.newOrder.lastname,
                $scope.newOrder.city);

            $scope.newOrder.firstname = '';
            $scope.newOrder.lastname = '';
            $scope.newOrder.city = '';
        };

        $scope.deleteOrder = function (orderId) {
            var r = confirm("Are you sure to delete order " + orderId);

            if (r == true) {
                ordersFactory.deleteOrder(orderId);
            }
        };
    }
);

customersApp.factory('ordersFactory', function () {

    /*
     * order
     * -id:int
     * -customerId:int
     * products:array[
     *   -name:string
     *   -price:int
     *   -quantity:int
     *   -total:(price * quantity)
     * ]
     * totalPrice: (productsTotal)
     * */

    var orders = [
        {id: 1, customerId: 3, products: [
            {name: 'DVD: Star Wars 1', price: 20, quantity: 2, total: 0},
            {name: 'DVD-player', price: 80.0, quantity: 1, total: 0},
            {name: 'HDMI-cable', price: 5.50, quantity: 1, total: 0}
        ], totalPrice:0}, //total = 125,5
        {id: 2, customerId: 6, products: [{name: 'Book:Angular Basics', price: 20, quantity: 1, total: 0}], totalPrice:0},
        {id: 3, customerId: 2, products: [{name: 'Kettlebell 36kg', price: 130, quantity: 2, total: 0}], totalPrice:0}
    ];

    var factory = [];

    factory.getOrders = function () {
        return orders;
    };

    factory.addOrder = function (firstname, lastname, city) {
        //var newId = 0;
        //
        //for (i = 0; i < customers.length; i++) {
        //    if (customers[i].id >= newId) {
        //        newId = customers[i].id + 1;
        //    }
        //}
        //
        //customers.push(
        //    {id: newId, firstname: firstname, lastname: lastname, city: city}
        //);

        //return customers;
    };

    factory.deleteOrder = function (orderId) {

        for (i = 0; i < orders.length; i++) {
            if (orders[i].id == orderId) {
                orders.splice(i, 1);
                break;
            }
        }
    };

    return factory;

});