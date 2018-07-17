(function (itemController) {
	var data = require("../data");
  /*
  // Response handling
	let response = {
	  status: 200,
	  data: [],
	  message: null
	};
  */

	itemController.init = function (app) {
		app.get("/api/items", function (req, resp) {
			data.getItems(function (error, items) {
				if (error) {
					resp.send(400, err);
				}
				else {
//				    response.data = items;
//				    resp.json(response);
				  resp.set("Content-Type", "application/json");
					resp.send(items);
				}
			});
		});

		app.get("/api/items/:itemname", function (req, resp) {
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


		app.post("/api/newitem", function (req, resp) {
			var itemName = req.body.itemname;
			data.addNewItem(itemName, function (error) {
				if (error) {
					console.log(error);
					//req.flash("newCatError", error);
					resp.redirect("/");
				} else {
					resp.redirect("items/" + itemName);
				}
			});

		});

		//app.post("/api/edititem", function (req, resp) {
		//  console.log("in /api/edititem");
		//  var itemName = req.body.itemname;
		//	var itemId = req.body.id;

		//	data.editItem(itemId, itemName, function (error) {
		//		if (error) {
		//			console.log(error);
		//			//req.flash("newCatError", error);
		//			resp.redirect("/");
		//		} else {
		//			resp.redirect("items/" + itemName);
		//		}
		//	});
		//});

		app.put("/api/edititem/:id", function (req, resp) {
		  console.log("in /api/edititem put");
		  var itemName = req.body.name;
		  var itemId = req.body._id;

		  data.editItem(itemId, itemName, function (error) {
		    if (error) {
		      console.log(error);
		      //req.flash("newCatError", error);
		      resp.redirect("/");
		    } else {
		      resp.redirect("items/" + itemName);
		    }
		  });
		});


	};
})(module.exports)
