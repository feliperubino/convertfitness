// utiliza padrão CommonJs para exportar módulos
module.exports = function(app) {
	
	//define a url
    app.get("/produtos",function(req, res) {

		//chama o módulo de conexão
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

		// chama "Classe" produtosDAO que gerencia as query's do banco
        produtosDAO.lista(function(err, results){
            res.render('produtos/lista', {lista: results});
        });

        connection.end();

    });
}
