(function (addressController) {

    var data = require("../data");


    addressController.init = function (app) {
        // ???????????????????????
        app.get("/api/xyz", function (req, resp) {
              data.getItems(function (error, items) {
                  if (error) {
                      resp.send(400, err);
                  }
                  else {
                    resp.set("Content-Type", "application/json");
                      resp.send(items);
                  }
              });
          });

        app.get("/api/addresses", function (req, resp) {
          data.getAddresses(function (error, items) {
            if (error) {
              resp.send(400, err);
            }
            else {
              resp.set("Content-Type", "application/json");
              resp.send(items );
            }
          });
        });

        app.get("/api/addressesalt", function (req, resp) {
          data.getAddresses(function (error, items) {
            if (error) {
              resp.send(400, err);
            }
            else {
              resp.set("Content-Type", "application/json");
              resp.send({ "total_count": 6, "incomplete_results":false,  items: items });
            }
          });
        });


    }

})(module.exports)
