(function (passengerController) {

  var data = require("../data");


  passengerController.init = function (app) {

    app.get("/api/passengers", function (req, resp) {
      resp.set("Content-Type", "application/json");
      data.getPassengers(function (error, items) {
        if (error) {
          resp.send(400, err);
        }
        else {
          resp.set("Content-Type", "application/json");
          resp.send(items);
        }
      });

    });

    app.get("/api/passengers/:id", function (req, resp) {

      var itemId = parseInt(req.params.id);

      
      console.log(itemId);
      data.getPassenger(itemId,  function (error, items) {
        if (error) {
          resp.redirect("/");
        } else {
          resp.send(items)
        }
      });


    });


    app.put("/api/passengers/:id", function (req, resp) {
        console.log("in /api/passengers put");
        
        var itemName = req.body.fullname;
        var itemId = req.body._id;

        data.editPassenger(itemId, itemName, function (error, items) {
          if (error) {
            console.log(error);
            //req.flash("newCatError", error);
            resp.redirect("/");
          } else {
            resp.send(items)
          }
        });

       
      });


    app.delete("/api/passengers/:id", function (req, resp) {
      var itemId = req.params.id;

      data.deletePassenger(itemId, function (error, items) {
        if (error) {
          console.log(error);
          //req.flash("newCatError", error);
          resp.redirect("/");
        } else {
          resp.send(items)
        }
      });


    });
 

  }

})(module.exports)
