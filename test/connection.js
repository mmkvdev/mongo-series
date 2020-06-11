const mongoose = require('mongoose');

//es6 promises
mongoose.Promise = global.Promise

before(function (done) {
    // connect to mongodb
    mongoose.connect('mongodb://localhost/mongoexperimentation', { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.once('open', function () {
        console.log('Connection successfully made');
        done()
    }).on('error', function () {
        console.log('Error in connection', error);
    })
})
