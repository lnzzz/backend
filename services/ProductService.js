const product = require('../models/Product'),
	  productValidator = require('../validators/ProductValidator');

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
	
	this.getProduct = (id) => {
		return new Promise((resolve, reject) => {
			product.fetch(id).then((product) => {
				resolve(product);
			}).catch((error) => {
				reject(error);
			});
		});
	}
	
	this.create = (newProduct) => {
		return new Promise((resolve, reject) => {
			productValidator.validate(newProduct).then((newProduct) => {
				product.create(newProduct).then((success) => {
					resolve(success);
				}).catch((error) => {
					reject(error);
				});
			}).catch((error) => {
				reject(error);
			});
		});	
	}
}

module.exports = new productService();