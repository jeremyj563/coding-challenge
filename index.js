var url = "mongodb://localhost:27017/mydb";
var MongoClient = require('mongodb').MongoClient(url, {useUnifiedTopology: true});

MongoClient.connect(function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});