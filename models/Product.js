const config = require('../config'),
	  mongoUtils = require('../utils/MongoUtils');
	  
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
	
	this.fetch = (name) => {
		return new Promise((resolve, reject) => {
			try {
				let products = mongoUtils.getDb();
				products.collection('products').find({ name : name }).toArray((err, results) => {
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
	
	
	this.create = (newProduct) => {
		console.log(newProduct);
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