const productService = require('../services/ProductService');


const productController = function() {	
	this.listProducts = (req, res) => {
		
		productService.listProducts().then((result) => {
			res.status(200).send(result);
		}).catch((error) => {
			res.status(500).send({ message: error.message });
		});
	}
	
	this.getProduct = (req, res) => {
		productService.getProduct(req.params.product).then((result) => {
			res.status(200).send(result);
		}).catch((error) => {
			res.status(500).send({ message: error.message });
		});
	}
	
	this.create = (req, res) => {
		productService.create(req.body).then((success) => {
			res.status(200).send(success);
		}).catch((error) => {
			res.status(500).send({ message: error.message });
		});
	}
}

module.exports= new productController();