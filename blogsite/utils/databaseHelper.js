var MongoClient = require("mongodb").MongoClient;
const config = require("./config");
let _db;
class databaseHelper {
  connection() {
    console.log('in the connection---------->>>');
    try {
      MongoClient.connect(config.db.url, { useNewUrlParser: true }, function(err,db) {
        if (err) throw err;
        _db = db;
        console.log('Database Connected!!');
        _db.close();
        return true;
      });
    } catch (err) {
      console.log('error in creation-->',err);
      return err;
    }
  }
  findOne(table, where, projection) {
    try {
      var dbo = _db.db(config.db.database);
      dbo.collection(table).findOne(where, projection, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        return promise.resolve(result);
      });
    } catch (err) {
      console.log(err);
     return err;
    }
  }

    async find(table){
        try{
          let data;
            var dbo = _db.db(config.db.database);
            dbo.collection(table).find((function(err, res) {
              console.log('hellooooo',res);
                if (err) throw err;
                data = res;
                return data;
              }))
              _db.close();
        }catch(error){
            console.log(err);
           return true;
        }
    }

  insert(table, data) {
    try {
      var dbo = _db.db(config.db.database);
      dbo.collection(table).insertOne(data, function(err, result) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
        return result;
      });
    } catch (err) {
      console.log(err);
     return err;
    }
  }
  update(table, where, newData) {
    try {
      var dbo = _db.db(config.db.database);
      dbo.collection(table).updateOne(where, newData, function(err, result) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
        return result;
      });
    } catch (err) {
      console.log(err);
       return err
    }
  }

  // findWithAggregate(table, aggregate) {
  //   var dbo = _db.db(config.db.database);
  //   dbo.collection(table).aggregate(aggregate, function(err, result) {
  //     if (err) throw err;
  //     db.close();
  //     return result;
  //   });
  // }
}
module.exports = new databaseHelper();
