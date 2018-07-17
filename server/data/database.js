(function (database) {
    
        var mongodb = require("mongodb");
        var mongoUrl = "mongodb://localhost:27017/mean";
    
    
        var theDb = null;
    
        database.getDb = function (next) {
            if (!theDb) {
                // connect to the database
                mongodb.MongoClient.connect(mongoUrl, function (err, db) {
                    if (err) {
                        next(err, null);
                    } else {
                        theDb = {
                            db: db,
                            items: db.collection("items"),
                            addresses: db.collection("addresses"),
                            passengers: db.collection("passengers")
                        };
                        next(null, theDb);
                    }
                });
            } else {
                next(null, theDb);
            }
        }
    
    })
    (module.exports)
