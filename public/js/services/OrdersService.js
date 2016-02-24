/**
 * Created by ismol on 12/02/2016.
 */
customersApp.service('OrdersService', ['$http', function ($http) {

    this.getOrders = function () {
        return $http.get('api/orders').then(function (response) {

            var orders = response.data;

            for (i = 0; i < response.data.length; i++) {

                //Count total price for order
                if (response.data[i].totalPrice == 0) {
                    var orderTotal = 0;

                    for (j = 0; j < response.data[i].products.length; j++) {
                        orderTotal = orderTotal + response.data[i].products[j].unitPrice * response.data[i].products[j].quantity;
                    }

                    response.data[i].totalPrice = orderTotal;
                }
            }

            return response;
        });

    };

    this.getOrdersCount = function (customerId) {
        return $http.get('api/orders').then(function (response) {

            var orders = response.data;

            var orderCount = 0;

            for (kk = 0; kk < orders.length; kk++) {
                if (orders[kk].customerId == customerId) {
                    orderCount++;
                }
            }
            return orderCount;
        });

    };

}]);