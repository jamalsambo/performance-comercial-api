
const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'mocha3033.mochahost.com',
	database : 'sbcimove_avaliacao_agencia',
	user : 'sbcimove_jamal',
	password : 'p$AM5wZP(6EB',
	port: 3306
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;

