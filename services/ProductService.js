const product = require('../models/Product');

const productService = function () {
	this.listProducts = () => {
		return new Promise((resolve, reject) => {
			product.fetchAll().then((products) => {
				resolve(products);
			}).catch((error) => {
				reject(error);
			});
		});
	}
	
	this.getProduct = (name) => {
		return new Promise((resolve, reject) => {
			product.fetch(name).then((product) => {
				resolve(product);
			}).catch((error) => {
				reject(error);
			});
		});
	}
	
	this.create = (newProduct) => {
		return new Promise((resolve, reject) => {
			product.create(newProduct).then((success) => {
				resolve(success);
			}).catch((error) => {
				reject(error);
			});
		});	
	}
}

module.exports = new productService();