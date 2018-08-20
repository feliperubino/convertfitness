// utiliza padrão CommonJs para exportar módulos
var title = "Webstore";

module.exports = function(app) {
	
	//define a url
    app.get("/",function(req, res) {

        res.render('index', {title: 'Webstore Lojas Virtuais'});

    });
}