(function (data) {
    
        var seedData = require("./seedData");
        var database = require("./database");
        var mongodb = require('mongodb');


        data.getItems = function (next) {
          database.getDb(function (err, db) {
            if (err) {
              next(err, null)
            } else {
              db.items.find().toArray(function (err, results) {
                if (err) {
                  next(err, null);
                } else {
                  next(null, results);
                }
              });
            }
          });
        };

  
        data.addNewItem = function (itemName, next) {
          database.getDb(function (err, db) {
            if (err) {
              next(err, null)
            } else {
              var itemToInsert = {
                name: itemName
              };

              db.items.insert(itemToInsert, function (err) {
                if (err) {
                  next(error);
                }
                else {
                  next(null);
                }
              });
            }
          });
        };
    

        data.editItem = function (itemId, itemName, next) {
          database.getDb(function (err, db) {
            if (err) {
              next(err, null)
            } else {
              db.items.update(
                { '_id': new mongodb.ObjectID(itemId) },
                { $set: { 'name': itemName } },
                function (err) {
                  if (err) {
                    next(error);
                  }
                  else {
                    next(null);
                  }
              });
            }
          });
        };

        data.getAddresses = function (next) {
          database.getDb(function (err, db) {
            if (err) {
              next(err, null)
            } else {
              db.addresses.find().toArray(function (err, results) {
                if (err) {
                  next(err, null);
                } else {
                  next(null, results);
                }
              });
            }
          });
        };

        data.getPassengers = function (next) {
          database.getDb(function (err, db) {
            if (err) {
              next(err, null)
            } else {
              db.passengers.find().toArray(function (err, results) {
                if (err) {
                  next(err, null);
                } else {
                  next(null, results);
                }
              });
            }
          });
        };


        data.getPassenger = function (itemId, next) {
         
          database.getDb(function (err, db) {
            if (err) {
              next(err, null)
            } else {
              db.passengers.find({ id: itemId }).toArray(function (err, results) {
                if (err) {
                  next(err, null);
                } else {
                  next(null, results);
                }
              });
            }
          });
        };


        data.editPassenger = function (itemId, itemName, next) {
          database.getDb(function (err, db) {
            if (err) {
              next(err, null)
            } else {
              db.passengers.update(
                { '_id': new mongodb.ObjectID(itemId) },
                { $set: { 'fullname': itemName } },
                function (err, result) {
                  if (err) {
                    next(err,null);
                  }
                  else {
                    next(null,result);
                  }
                });
            }
          });
        };

        data.deletePassenger = function (itemId,  next) {
          database.getDb(function (err, db) {
            //console.log(itemId);

            if (err) {
              next(err, null)
            } else {
              db.passengers.remove(
                { '_id': new mongodb.ObjectID(itemId) },
                function (err, result) {
                  if (err) {
                    next(err, null);
                  }
                  else {
                    //console.log(result);
                    next(null, result);
                  }
                });
            }
          });
        };


  
        function seedDatabase() {
            database.getDb(function (err, db) {
                if (err) {
                    console.log("Failed to seed database " + err);
                }
                else {
                    db.items.count(function (err, count) {
                        if (err) {
                            console.log("Failed to retrieve database count");
                        }
                        else {
                            if (count == 0) {
                                console.log("Seeding database");
                                seedData.initialItems.forEach(function (item) {
                                    db.items.insert(item, function (err) {
                                        if (err) {
                                            console.log("Problem inserting " + item);
                                        }
                                    });
                                });
                            }
                            else {
                                console.log("Database already seeded with " + count + " item(s)");
                            }
                        }
                    });

                    db.addresses.count(function (err, count) {
                      if (err) {
                          console.log("Failed to retrieve database count for addresses");
                      }
                      else {
                          if (count == 0) {
                              console.log("Seeding database");
                              seedData.initialAddresses.forEach(function (item) {
                                  db.addresses.insert(item, function (err) {
                                      if (err) {
                                          console.log("Problem inserting " + item);
                                      }
                                  });
                              });
                          }
                          else {
                              console.log("Database already seeded with " + count + " addresses(s)");
                          }
                      }
                  });


                    db.passengers.count(function (err, count) {
                      if (err) {
                        console.log("Failed to retrieve database count for passengers");
                      }
                      else {
                        if (count == 0) {
                          console.log("Seeding database");
                          seedData.initialPassengers.forEach(function (item) {
                            db.passengers.insert(item, function (err) {
                              if (err) {
                                console.log("Problem inserting " + item);
                              }
                            });
                          });
                        }
                        else {
                          console.log("Database already seeded with " + count + " passenger(s)");
                        }
                      }
                    });



                  }
            });
        };
    
        seedDatabase();
    
    })(module.exports);
    
