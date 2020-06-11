const mongoose = require('mongoose');

//es6 promises
mongoose.Promise = global.Promise

// connect to mongodb
mongoose.connect('mongodb://localhost/mongoexperimentation', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', function () {
    console.log('Connection successfully made');
}).on('error', function () {
    console.log('Error in connection', error);
})