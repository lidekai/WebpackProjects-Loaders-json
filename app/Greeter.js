// Greeter.js
var config = require('./config.json');

module.exports = function() {
  var a = config.greetText;
  return a;
};
