const config = require('../config'),
	  mongoUtils = require('../utils/MongoUtils');
	  
const Category = function() {
	this.fetchAll = () => {
		return new Promise((resolve, reject) => {
			try {
				let categories = mongoUtils.getDb();
				categories.collection('categories').find().toArray((err, results) => {
					if (err) {
						reject(err);
					}
					resolve(results);
				});
			} catch (e) {
				reject(e.message);
			}
		});
	}
}

module.exports = new Category();