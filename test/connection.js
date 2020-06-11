const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/mongoexperimentation')

mongoose.connection.once('open', function() {
    console.log('Connection successfully made');
}).on('error', function(){
    console.log('Error in connection',error);
})