var app = require('./config/express')();
var uglify = require("uglify-js");


var fs = require('fs');

var head = fs.readFileSync('./public/head.html').toString();
var bottom = fs.readFileSync('./public/bottom.html').toString();
var logo = fs.readFileSync('./public/logo.html').toString();

var index = fs.readFileSync('./webstore/layout/index.html').toString();

var topo = fs.readFileSync('./webstore/layout/topo.html').toString();

var find = ["<!--##CLEAR_CSS##-->","<!--##H1_DIV##-->","<!--##LOGOTIPO##-->","<!--##VALOR_PRODUTOS_CARRINHO##-->"];
var replace = ["","h1",logo,"00"];
	topo = replaceStr(topo, find, replace);

var barra = fs.readFileSync('./webstore/layout/barra.html').toString();
var esquerda = fs.readFileSync('./webstore/layout/esquerda.html').toString();
var rodape = fs.readFileSync('./webstore/layout/rodape.html').toString();
var complemento = fs.readFileSync('./webstore/layout/complemento.html').toString();

var find = ["<!--###TOPO###-->","<!--###BARRA###-->","<!--###BARRA_ESQUERDA###-->","<!--###RODAPE###-->","<!--###COMPLEMENTO###-->"];
var replace = [topo,barra,esquerda,rodape,complemento];
	index = replaceStr(index, find, replace);

var result = head + index + bottom;

var configJs = JSON.parse(fs.readFileSync('./webstore/layout/config.json'));

function htmlModulos(){
	var css = "";
	var js = "";

	for (var i=0;i < configJs.modulos.length;i++) {
		var tag = createTag(configJs.modulos[i]);
		var moduloHtml = getModuloHtml(configJs.modulos[i]);
		result = result.replace(tag, moduloHtml);

		var moduloCss = getModuloCss(configJs.modulos[i]);
		css += moduloCss;

		var moduloJs = getModuloJs(configJs.modulos[i]);
		js += moduloJs + '\n';

	}
	var compress = uglify.minify(js);
	js = compress.code;

	css += fs.readFileSync('./webstore/layout/folha.css').toString();

	var find = [];
	var replace = [];
	for (var i = 1;i<=50;i++) {
		var tag = 'PREF_'+i;
		var value = configJs[tag];

		find.push("<!--###"+tag+"###-->");
		replace.push("#"+value)
	}
	css = replaceStr(css, find, replace);

	fs.writeFile('./public/index.html', result, (err) => {  
	    // throws an error, you could also catch it here
	    if (err) throw err;
	});
	fs.writeFile('./public/css/css.css', css, (err) => {  
	    // throws an error, you could also catch it here
	    if (err) throw err;
	});
	fs.writeFile('./public/js/script.js', js, (err) => {  
	    // throws an error, you could also catch it here
	    if (err) throw err;
	});

}

function getModuloHtml(modulo){
	var caminho = './webstore/modulos/'+modulo.nome+'/'+modulo.versao+'/'+modulo.nome+'.html';
	try{
		var retorno = fs.readFileSync(caminho).toString();
		return retorno
	}catch(e){
		return ""
	}
}

function getModuloCss(modulo){
	var caminho = './webstore/modulos/'+modulo.nome+'/'+modulo.versao+'/'+modulo.nome+'.css';
	try{
		var retorno = fs.readFileSync(caminho).toString();
		return retorno
	}catch(e){
		return ""
	}
}

function getModuloJs(modulo){
	var caminho = './webstore/modulos/'+modulo.nome+'/'+modulo.versao+'/'+modulo.nome+'.js';
	try{
		var retorno = fs.readFileSync(caminho).toString();
		return retorno
	}catch(e){
		return ""
	}
}

function createTag(modulo){
	nome = modulo.nome.toUpperCase();
	return "<!--##" + nome + modulo.versao + "##-->";
}

function replaceStr(str, find, replace) {
	for (var i = 0; i < find.length; i++) {
		str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
	}
	return str;
}

htmlModulos();

app.listen(3030, function(){
	console.log("server runing on port 3030");
});