
var mysql = require('mysql');


var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "ap"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	
	con.query("SELECT * FROM invoices;", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});