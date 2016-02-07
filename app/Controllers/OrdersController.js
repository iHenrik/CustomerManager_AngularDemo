/**
 * Created by ismol on 05/02/2016.
 */

customersApp.controller('OrdersController', function ($scope, ordersFactory, customersFactory) {

        Init();

        function Init() {
            var tempOrders = ordersFactory.getOrders();

            for (i = 0; i < tempOrders.length; i++) {

                //Get customer name
                var customer = customersFactory.getCustomer(tempOrders[i].customerId);
                tempOrders[i].customerName = customer.firstname + " " + customer.lastname;

                //Count total price for order
                var orderTotal = 0;

                for (j = 0; j < tempOrders[i].products.length; j++) {
                    orderTotal = orderTotal + tempOrders[i].products[j].unitPrice * tempOrders[i].products[j].quantity;
                }

                tempOrders[i].totalPrice = orderTotal;
            }

            $scope.orders = tempOrders;
        }

        $scope.getTotal = function (orderId) {

        };

        $scope.addOrder = function () {

            ordersFactory.addOrder(
                //    $scope.newOrder.firstname,
                //    $scope.newOrder.lastname,
                //    $scope.newOrder.city
            );
            //
            //$scope.newOrder.firstname = '';
            //$scope.newOrder.lastname = '';
            //$scope.newOrder.city = '';
        };

        $scope.deleteOrder = function (orderId) {
            //var r = confirm("Are you sure to delete order " + orderId);
            //
            //if (r == true) {
            //    ordersFactory.deleteOrder(orderId);
            //}
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
        {
            id: 1, customerId: 3, customerName: ' ', products: [
            {name: 'DVD: Star Wars 1', unitPrice: 20, quantity: 2},
            {name: 'DVD-player', unitPrice: 80.0, quantity: 1},
            {name: 'HDMI-cable', unitPrice: 5.50, quantity: 1}
        ], totalPrice: 0
        },
        {
            id: 2,
            customerId: 4, customerName: ' ',
            products: [{name: 'Book:Angular Basics', unitPrice: 20, quantity: 1}],
            totalPrice: 0
        },
        {
            id: 3,
            customerId: 5, customerName: ' ',
            products: [{name: 'Kettlebell 36kg', unitPrice: 130, quantity: 2}],
            totalPrice: 0
        }
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

        //for (i = 0; i < orders.length; i++) {
        //    if (orders[i].id == orderId) {
        //        orders.splice(i, 1);
        //        break;
        //    }
        //}
    };

    return factory;

});