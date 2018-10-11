const categoryService = require('../services/CategoryService');

const categoryController = function() {
	this.listCategories = (req, res) => {
		categoryService.listCategories().then((result) => {
			res.status(200).send(result);
		}).catch((error) => {
			res.status(500).send({ message: error.message });
		});
	}
}
// hago un cambio raro
module.exports= new categoryController();