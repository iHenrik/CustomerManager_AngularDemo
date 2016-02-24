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