function ProdutosHome() {
	ApiWS.ListaProdutosHome("ProdutosHomeRetorno");
}
function ProdutosHomeRetorno() {
	try {
		var template = $('#template').html();
		var conteudo = '<div class="titulo-categoria borda-principal cor-principal vitrine-lancamento"><strong>Lançamentos</strong></div><ul id="prod-list">';

		var JSON = ApiWS.Json;
		objetos.ProdutosHome = JSON;
		var obj = jQuery.parseJSON(JSON);

		$("#produtos-grupos").html("").css('display', 'none');
		if (obj.totalitens != null && obj.totalitens != undefined) {
			if (obj.totalitens > 0 && cfg['produtos_pagina'] < obj.totalitens) {

				for (a = 0; a < cfg['produtos_pagina']; a++) {
					var bloco = BlocoProduto(obj.produtos[a], template);
					conteudo += bloco;
				}

			}else if(obj.totalitens > 0){

				for (a = 0; a < 8; a++) {
					var bloco = BlocoProduto(obj.produtos[a], template);
					conteudo += bloco;
				}
				
			}else{
				empty('produto');
			}
		}else{
			empty('produto');
		}

		conteudo += '</ul>';
		$('#preloader').fadeOut('fast', function() {
			$('#produtos-grupos').after(conteudo).remove();
			$('#prod-list').show('fast');
		});

		ConteudoResponsivo();
		ListItemResize();
		nomeProd();
		
		var myVar = setInterval(myTimer, 1000);
		
		function myTimer() {
			if($('body').find('#prod-list').length > 0){
				$('body').find('#prod-list').slick({
					infinite: true,
					slidesToShow: 4,
					slidesToScroll: 1,
					prevArrow: '<div class="slick-prev slick-arrow" style="display: block;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"></path></svg></div>',
					nextArrow: '<div class="slick-next slick-arrow" style="display: block;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path></svg></div>',
					responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							infinite: true
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 375,
						settings: {
							slidesToShow: 1
						}
					}],
				})
				clearInterval(myVar);		
				
			}
		}
		
	} catch (e) { console.log('ProdutosHomeRetorno: ' + e.message); }
}