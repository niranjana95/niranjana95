var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {type: String}
});

var user = mongoose.model('nttf_nec',userSchema);
module.exports = user;
