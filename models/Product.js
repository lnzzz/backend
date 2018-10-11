const config = require('../config'),
	  mongoUtils = require('../utils/MongoUtils'),
	  ObjectID = require('mongodb').ObjectID;

	  
const Product = function() {
	this.fetchAll = () => {
		return new Promise((resolve, reject) => {
			try {
				let products = mongoUtils.getDb();
				products.collection('products').find().toArray((err, results) => {
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
	
	this.fetch = (id) => {
		return new Promise((resolve, reject) => {
			try {
				let products = mongoUtils.getDb();
				products.collection('products').findOne({ _id : ObjectID.createFromHexString(id) }, (err, result) => {
					if (err) {
						reject(err);
					}
					resolve(result);
				});
			} catch (e) {
				reject(e.message);
			}
		});
	}
	
	
	this.create = (newProduct) => {
		return new Promise((resolve, reject) => {
			try {
				let products = mongoUtils.getDb();
				products.collection('products').insert(newProduct, null, (err, doc) => {
					if (err) {
						reject(err);
					}
					resolve(doc.ops[0]);
				});
			} catch (e) {
				reject(e.message);
			}
		});
	}
}

module.exports = new Product();