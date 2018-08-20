function ProdutosDAO(connection){
	this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
	// utiliza o método 'query' para buscar o resultado no db,
	// passanod uma função de callback para lidar com a requisição
    this._connection.query('select * from produtos',callback);
}

module.exports = function(){
	return ProdutosDAO;
}