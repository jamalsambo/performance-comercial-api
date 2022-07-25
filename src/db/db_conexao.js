
const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'avalicao_agencia',
	user : 'root',
	password : '',
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

