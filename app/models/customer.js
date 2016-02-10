/**
 * Created by ismol on 09/02/2016.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('customer', {
    id:{type:Number, default:0},
    firstname : {type : String, default: ''},
    lastname : {type : String, default: ''},
    city : {type : String, default: ''}
});