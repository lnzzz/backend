const productValidator = function() {
	
	// creo un schema al estilo mongoose pero para validar input de datos.
	this.productSchema = {
		name: {
			type: "string",
			required: true
		},
		price: {
			type: "number",
			required: true
		},
		list_price: {
			type: "number",
			required: true
		},
		brand: {
			type: "string",
			required: true
		},
		category_id: {
			type: "number",
			required: true
		},
		virtual: {
			type: "boolean",
			required: false
		}
		
	}
	
	
	
	this.validate = (product) => {
		return new Promise((resolve, reject) => {
			for (var i in this.productSchema) {
					if (typeof this.productSchema[i] == 'object') {
						if (this.productSchema[i].type == 'boolean') {
							if (product[i] == 0 || product[i] == 'false') { product[i] = false }
							if (product[i] == 1 || product[i] == 'true') { product[i] = true }
						}
						
						if (typeof product[i] != this.productSchema[i].type) {
							reject({ message: "Invalid type: "+i+" must be a "+this.productSchema[i].type });
							return
						}
						if (this.productSchema[i].required == true) {
							if (product[i] =='' || !product[i]) {
								reject({ message: i+" must be defined." });
							}
						}
					} else {
						reject({ message: "Invalid property '"+i+"'" });
						return;
					}
				}
			resolve(product);
		});
	}
}

module.exports = new productValidator();