var mongoose = require('mongoose');
var config = require('./config')

module.exports = {
    connect: function(){
        mongoose.connect(config.database, function(err){
            if( err ){
                console.log(err);
            } else {
                console.log('Connect to database done');
            }
        });
    }
}