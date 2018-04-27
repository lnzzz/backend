const category = require('../models/Category');

const categoryService = function () {
	this.listCategories = () => {
		return new Promise((resolve, reject) => {
			category.fetchAll().then((categories) => {
				resolve(categories);
			}).catch((error) => {
				reject(error);
			});
		});
	}
}

module.exports = new categoryService();