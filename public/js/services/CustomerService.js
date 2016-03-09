/**
 * Created by ismol on 10/02/2016.
 */
//console.log(JSON.stringify( response.data, null, 2));
customersApp.service('CustomerService', ['$http', function ($http) {

    this.getCustomers = function () {

        return $http.get('api/customers').then(function (response) {
            return response;
        });

    };

    this.getCustomer = function () {

        return $http.get('api/customers').then(function (response) {
            return response;
        });

    };

    this.createCustomer = function (newCustomer) {

        return $http.post('api/customers', newCustomer)
            .then(function (response) {
                return response;
            });
    };

    this.deleteCustomer = function (customerId) {
        return $http.delete('/api/customers/' + customerId);
    }
}]);