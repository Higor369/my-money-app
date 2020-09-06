
const e = require('express');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://eu:h1234567@agoravai.d79zs.gcp.mongodb.net/reactfim?retryWrites=true&w=majority', {useNewUrlParser: true}).then(resp={})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('o pai ta on')
})


module.exports = mongoose.connect('mongodb+srv://eu:h1234567@agoravai.d79zs.gcp.mongodb.net/reactfim?retryWrites=true&w=majority', {useNewUrlParser: true})

// mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false")