const MongoClient = require( 'mongodb' ).MongoClient,
	  config = require('../config').db;

let _db;

module.exports = {
  connectToServer: function(callback) {
    MongoClient.connect(config.url, function( err, client ) {
		if (err) {
			return callback(err);
		}
      _db = client.db(config.dbName);
	  return callback(null);
    });
  },

  getDb: function() {
    return _db;
  }
};