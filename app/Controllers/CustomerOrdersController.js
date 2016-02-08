/**
 * Created by ismol on 05/02/2016.
 */

customersApp.controller('CustomerOrdersController', function ($scope, $routeParams, ordersFactory, customersFactory) {

        Init();

        function Init() {

            var cid = $routeParams.customerId;

            var orders = ordersFactory.getOrders(cid);

            for (i = 0; i < orders.length; i++) {

                if (orders[i].customerName == '') {
                    var customer = customersFactory.getCustomer(orders[i].customerId);
                    orders[i].customerName = customer.firstname + " " + customer.lastname;
                }
            }

            //var tempOrders = ordersFactory.getOrders();
            //
            //for (i = 0; i < tempOrders.length; i++) {
            //
            //    //Get customer name
            //    var customer = customersFactory.getCustomer(tempOrders[i].customerId);
            //    tempOrders[i].customerName = customer.firstname + " " + customer.lastname;
            //
            //    //Count total price for order
            //    var orderTotal = 0;
            //
            //    for (j = 0; j < tempOrders[i].products.length; j++) {
            //        orderTotal = orderTotal + tempOrders[i].products[j].unitPrice * tempOrders[i].products[j].quantity;
            //    }
            //
            //    tempOrders[i].totalPrice = orderTotal;
            //}
            //
            $scope.orders = orders;
        }


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