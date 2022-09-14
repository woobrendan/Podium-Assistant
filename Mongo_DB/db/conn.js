const {MongoClient} = require('mongodb')
const connectionString = process.env.DATABASE_URL;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true
});

let dbConnection;

module.exports = {
  connectToServer: function(callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err)
      }
    
      dbConnection = db.db('sro_db');
      console.log('Successfully connected to MongoDB.')

      return callback();
    });
  },

  getDb: function() {
    return dbConnection;
  }
}