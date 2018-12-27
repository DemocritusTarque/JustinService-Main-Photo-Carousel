const mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'FEC'
});

connection.connect(error => {
	if (error) {
		console.log(error, 'Error with DB Connection!');
	}
	console.log('Connected to DB FEC!');
});

createProduct = function (product, callback) {
	connection.query(
		'Insert into product(productName, tid) values(?, ?)',
		[product.productName, product.tid],
		(error, productResult) => {
			if (error) {
				console.log(error, 'Issue inserting into DB!');
			} else {
				console.log(productResult, 'what are results from insert???');
				var bulkPhotoInsert = product.photos.map(url => {
					return [productResult.insertId, url];
				});
				connection.query(
					'Insert into images(product_id, urlLink) values ?',
					[bulkPhotoInsert],
					(error, results) => {
						if (error) {
							console.log(error, 'Issue inserting into DB!');
						} else {
							console.log(
								results,
								'what are results from insert???'
							);
							callback(null, results);
						}
					}
				);
			}
		}
	);
};

getAllPhotos = function () { };

module.exports = {
	createProduct
};
