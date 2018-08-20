//importa o módulo 'mysql', que foi instalado via npm
var mysql = require('mysql');

module.exports = function(){

	// cria instância de conexão passando um json como parâmeto de dados
	return = mysql.createDBConnection({
		host : 'localhost:3006',
		user : 'admin',
		password : 'admin',
		database : 'casadocodigo_nodejs'
	});
}

module.exports = function(){
	return createDBConnection;
}