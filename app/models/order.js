/**
 * Created by ismol on 11/02/2016.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('order', {
    id:{type:Number, default:0},
    customerId : {type : Number, default: ''},
    products:{type: Array},
    totalPrice: {type : Number, default: ''}
});

//{
//    id: 1, customerId: 3, customerName: '', products: [
//    {name: 'DVD: Star Wars 1', unitPrice: 20, quantity: 2},
//    {name: 'DVD-player', unitPrice: 80.0, quantity: 1},
//    {name: 'HDMI-cable', unitPrice: 5.50, quantity: 1}
//], totalPrice: 0
//}