$(document).ready(function(){
	try{
		isReady("objetos.CategoriasLista", "CategoriaLateral()");
	} catch (e) { console.log(e.message); }
});

function CategoriaLateral(){
	var registro = [];
	var obj = jQuery.parseJSON(objetos.CategoriasLista);
	var departamento = obj.Categorias;
	var DepartamentosLateral = Departamentos(departamento, 0, registro);
	$('#departamentos-lateral').append(DepartamentosLateral);
}