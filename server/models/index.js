const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }).then(console.log("DB connected"));

module.exports.User = require('./User');
module.exports.Poll = require('./Poll');