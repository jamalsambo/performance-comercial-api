
const mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'mysql741.umbler.com',
	database: 'avalicao_agencia',
	user: 'jamal',
	password: 'Iu3G914p4fUa',
	port: 41890
});

connection.connect(function (error) {
	if (error) {
		throw error;
	}
	else {
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;

