const databaseHepler = require('../../utils/databaseHelper');
var MongoClient = require("mongodb").MongoClient;
class userHelper{
     getUsers(body){
        var url = "mongodb://localhost:27017/";
        let data;
        MongoClient.connect(url,{ useNewUrlParser: true },function(err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");
          dbo.collection("user").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log('-------------------->>>>>>>>>>',result[0]);
            db.close();
            return result[0];
          });
        });
        // var data = {
        //   name:"abc",
        //   no:"12345"
        // }
        // return data
    }
}
module.exports = new userHelper()