const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	productController = require('./controllers/ProductController'),
	categoryController = require('./controllers/CategoryController'),
	config = require('./config'),
	mongoUtils = require('./utils/MongoUtils'),
	cors = require('cors');

	
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/product', productController.create);
app.get("/products", productController.listProducts);
app.get("/products/:product", productController.getProduct);
app.get("/categories", categoryController.listCategories);

app.listen(config.app.port, function() {
	mongoUtils.connectToServer((error) => {
		if (!error) {
			console.log("Mongo connection initialized.");
			console.log("App is running on "+config.app.port);
		} else {
			console.log("ERROR: cannot connect to database.");
			console.log(error.message);
		}
	});
});