$(document).ready(function(){
	try{
		if ($("#HdEtapaLoja").val() == "HOME") {
			window.setTimeout("ProdutosDestaque()", 0);
		}
	} catch (e) { console.log(e.message); }
	
	
	$('#prod-destaque .lista-ofertas li').on('mouseover', function(){
		var precoantigo = $(this).attr('data-precoantigo');
		var preconovo = $(this).attr('data-preconovo');
		var precocartao = $(this).attr('data-precocartao');
		var vezes = $(this).attr('data-vezes');
		var boleto = $(this).attr('data-boleto');
		var imagem = $(this).find('img').attr('src');
		var titulo = $(this).find('p').text();
		
		var oferta = $('.oferta-principal');
		oferta.find('img').attr('src', imagem);
		oferta.find('h3').text(titulo);
		oferta.find('.de').text(precoantigo);
		oferta.find('.por').text(preconovo);
		oferta.find('.vezes').text(vezes);
		oferta.find('.cartao strong').text(precocartao);
		oferta.find('.boleto').text(boleto + ' depósito ou boleto');
	})
	
	$('#grupo-produtos .grupos li').click(function(){
		$('#grupo-produtos .grupos li').removeClass('active');
		$(this).addClass('active');
		var grupo = $(this).find('a').attr('class');
		$('#grupo-produtos .lista-grupos').hide();
		$('#grupo-produtos').find('#'+grupo).show();
	})
	
	$('header .login a').click(function(){
		$(this).parents('.login').find('.acessar-conta').toggleClass('active');
	})
	
});

function ProdutosDestaque() {
	ApiWS.ListaProdutosDestaque("ProdutosDestaqueRetorno");
}
function ProdutosDestaqueRetorno() {
	try {
		
		var OBJETO = ApiWS.Json;
		var obj = jQuery.parseJSON(OBJETO);
		objetos.ProdutosDestaque = OBJETO;
		
		var template = $('#template').html();

		$("#destaque-list").html("");
		if (obj.totalitens && obj.totalitens > 0) {

			var li = "";

			for (a = 0; a < obj.totalitens; a++) {
				var bloco = BlocoProduto(obj.produtos[a], template);
				li += bloco;
			}

			$('#destaque-list')
			.append(li)
			.css({
				opacity: '1',
				visibility: 'visible'
			})
			.slick({
				infinite: true,
				autoplay: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				autoplaySpeed: 3000,
				arrows: false,
				dots: true,
				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}]
			});

		}else{
			/*$('#prod-destaque').hide();*/
			empty('destaque');
		}

	} catch (e) { console.log('ProdutosDestaqueRetorno: ' + e.message); }
}