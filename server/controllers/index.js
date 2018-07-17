(function (controllers) {
  controllers.init = function (app) {
    var itemController = require('./itemController');
    itemController.init(app);

    var addressController = require('./addressController');
    addressController.init(app);

    var passengerController = require('./passengerController');
    passengerController.init(app);


  };
})(module.exports)
