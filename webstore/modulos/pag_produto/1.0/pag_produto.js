$(document).ready(function(){
	try{

		var Etapa = $("#HdEtapaLoja").val();
		if (Etapa == "PRODUTO") {
			window.setTimeout("ProdutoDados()", 1);
		}

		precoFlutua();
		
	} catch (e) { console.log(e.message); }

	try{
		//evita o event listener do scroll
		var scrollTimer = null;
		$(window).scroll(function () {
		    if (scrollTimer) {
		        clearTimeout(scrollTimer);
		    }
		    scrollTimer = setTimeout(precoFlutua, 100);
		});
	} catch (e) { console.log(e.message); }

	try{
		//Cria a seleção de variação em duas cores
		if($('.LV_GeneroDuasCores').length){
			var cor1 = $('.LV_GeneroDuasCores').find('span:nth-child(1)').html();
			var cor2 = $('.LV_GeneroDuasCores').find('span:nth-child(2)').html();
			$('.LV_GeneroDuasCores').html('<span style="background: -webkit-linear-gradient(135deg, '+cor1+' 50%, '+cor2+' 50%);background: -o-linear-gradient(135deg, '+cor1+' 50%, '+cor2+' 50%);background: -moz-linear-gradient(135deg, '+cor1+' 50%, '+cor2+' 50%);background: linear-gradient(135deg, '+cor1+' 50%, '+cor2+' 50%);">'+cor1+' '+cor2+'</span>');
		}

	} catch (e) { console.log(e.message); }

	try{
		//Adiciona dinamicamente os links de compartilhamento
		var LinkProdutoVar = window.location.href;
		var NomeProdutoVar = $("h1").html();
		var CODIGO_LOJA = $("#HD_LV_ID").val();
		var CODIGO_PRODUTO = $("#LV_HD_PROD_ID").val();

		$("#share-twitter").attr("href", "http://twitter.com/home?status=" + LinkProdutoVar);
		$("#share-facebook").attr("href", "http://www.facebook.com/sharer.php?u=" + LinkProdutoVar + "&t=" + NomeProdutoVar);
		$("#share-mail").attr("href", "/indique/" + CODIGO_LOJA + "/" + CODIGO_PRODUTO + "/indicar.aspx");
		$("#share-gplus").attr("href", "https://plus.google.com/share?url=" + LinkProdutoVar);
		$("#share-whats").attr("href", "https://api.whatsapp.com/send?text=" + LinkProdutoVar);

	} catch (e) { console.log(e.message)}

	try{

		$('#TxtCalculoFrete').attr('placeholder', 'Insira seu CEP');
		$('#BtCalculoFrete').attr('value', 'OK');
		$('#LblCalculoFrete').html('Calcule o frete e prazo:');
		$('#LV_BT_COMPRAR span').prepend('<i class="fa fa-shopping-cart"></i>')

		$("#TxtCalculoFrete").on('keyup', function (event) {
			if (event.keyCode == '13') {
				FuncaoCalculaFrete();
			}
		});
		
	} catch (e) { console.log(e.message)}

});

var objetos = {};
function ProdutoDados() {
	ApiWS.ProdutoDados("ProdutoDadosRetorno");
}

function ProdutoDadosRetorno(){

	try{
		if(estrutura.produtos_linha == 0){
			ColunasResponsivo('#produtos-relacionados .list-item', 12, 6, 4);
		}else{
			ColunasResponsivo('#produtos-relacionados .list-item', 12, 6, estrutura.produtos_linha);
		}
	} catch (e) { console.log('ProdutoDadosRetorno: '+e.message);}

	try{

		var OBJETO = ApiWS.Json;
		var obj = jQuery.parseJSON(OBJETO);
		objetos.ProdutoDadosRetorno = OBJETO;

		var template = $('#div-conteudo').html();
		// $('#div-conteudo').html("");
		var template2 = $('#descricoes').html();
		// $('#descricoes').html("");
		var template3 = $('#preco-flutua').html();
		// $('#preco-flutua').html("");

		var ACCORDION = "",
			ADD = "",
			BREVE = "",
			CODIGO = '<p id="codigo-produto">C&oacute;d.: '+obj.codigo+'</p>',
			COMPRAR = "",
			FABRICANTE = "",
			INFOS = "",
			NOME = '<h1 id="nome-produto">'+obj.nome+'</h1>',
			NOME_FLUTUA = '<h3 id="nome-flutua">'+obj.nome+'</h3>',
			OUTRO = "",
			PRECO = "",
			retornoPreco = "",
			TABCONTENT = "",
			tabelaParcelas = "",
			TABLIST = "";

		// var dataNome = $('[data-wbstr-nome]');
		// $(dataNome).after(NOME);
		// dataNome.remove();

		if(obj.migalha != null && obj.migalha != undefined){
			var qtd = 0;
			for (b = 0; b < obj.migalha.length; b++){
				qtd++;
				if (obj.migalha[b].nome == "P&aacute;gina inicial") {
					obj.migalha[b].nome = '<i class="fa fa-home"></i>';
				}
				if (obj.migalha[b].atual == true){
					$('#lista-migalha').append('<li><a href="' + obj.migalha[b].url + '" class="active">' + obj.migalha[b].nome + '</a></li>');
				}else{
					$('#lista-migalha').append('<li><a href="' + obj.migalha[b].url + '">' + obj.migalha[b].nome + '</a></li>');
				}

				if(qtd != obj.migalha.length){
					$('#lista-migalha').append('<li class="separador">/</li>');					
				}
			}
		}else{
			$('#lista-migalha').hide();
		}

		fotosProduto(obj.fotos, obj.nome);

		if (obj.fabricante != null && obj.fabricante != undefined){
			var FABRICANTE = '<p id="fabricante-produto"><a href="'+obj.fabricante.url+'">'+obj.fabricante.nome+'</a></p>';
		}

		if (obj.disponivel == true) {

			if (obj.breve != null && obj.breve != undefined && obj.breve.length > 0){
				var BREVE = '<p id="breve-produto">'+obj.breve+'</p>';
			}

			if (modoLoja != 2 && modoLoja != 3 && cfg['preco_apos_login'] == false) {
				if(obj.prazo != 0){
					INFOS += '<p class="prazo-produto">Disponibilidade: '+obj.prazo+' dias</p>';
				}else{
					INFOS += '<p class="prazo-produto">Disponibilidade: imediata</p>';
				}
			}

			obj.garantia_meses = 0;
			if (obj.garantia_meses != 0){
				INFOS += '<p class="garantia-produto">Garantia: '+obj.garantia_meses+' meses</p>';
			}
			if (obj.precos != null && obj.precos != undefined && obj.precos.preco != 0 && cfg['preco_apos_login'] == false) {

				var PRECO = Number(obj.precos.preco),
					AVISTA = Number(obj.precos.desconto_avista),
					PROMOCAO = Number(obj.precos.preco_promocao),
					VEZES = Number(obj.precos.max_parcelas),
					MIN_PARCELA = Number(obj.precos.valor_min_parcelas),
					PARCELAS = "";

				if (PROMOCAO != 0){
					PORCENTAGEM = ((PRECO - PROMOCAO) / PRECO * 100).toFixed(0);
					ADD += '<span class="tarja-produto">'+PORCENTAGEM+'% desconto</span>';

					DESCONTO = PROMOCAO / 100 * AVISTA;

					retornoPreco = '<p class="preco-promocao">de R$'+AjustaMoney(PRECO)+'</p>';
					retornoPreco += '<p class="preco-produto">por R$'+AjustaMoney(PROMOCAO)+'</p>';
					if (VEZES > 1) {

						// valores[0] = preço de venda do produto
						// valores[1] = desconto
						// valores[2] = quantidade m&aacute;xima de parcelas (vezes) aceita pela loja
						// valores[3] = parcela mínima aceita pela loja
						// valores[4] = em qual parcela se iniciam os juros
						// valores[5] = taxa de juros praticado pela loja
						valores = [PROMOCAO, DESCONTO, VEZES, MIN_PARCELA, Number(obj.precos.juros_inicia), Number(obj.precos.juros)];
						var precos = PrecosProduto(PROMOCAO, valores[1], VEZES, MIN_PARCELA, Number(obj.precos.juros_inicia), Number(obj.precos.juros));
						retornoPreco += precos[0];
						retornoPreco += precos[1];
						PARCELAS = precos[2];
						ADD += '<span class="tarja-produto">% desconto</span>';
					}
				}else{

					DESCONTO = PRECO / 100 * AVISTA;

					retornoPreco = '<p class="preco-produto">R$'+AjustaMoney(PRECO)+'</p>';
					if (VEZES > 1) {
						valores = [PRECO, DESCONTO, VEZES, MIN_PARCELA, Number(obj.precos.juros_inicia), Number(obj.precos.juros)];
						var precos = PrecosProduto(PRECO, valores[1], VEZES, MIN_PARCELA, Number(obj.precos.juros_inicia), Number(obj.precos.juros));
						retornoPreco += precos[0];
						retornoPreco += precos[1];
						PARCELAS = precos[2];
					}

				}

				if(PARCELAS.length != 0){
					var tabelaParcelas = '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"><div class="panel panel-default"><div class="panel-heading" role="tab" id="headingOne"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Formas de parcelamento</a></div><div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne"><ul id="lista-parcelas" class="">';
					tabelaParcelas += PARCELAS;
					tabelaParcelas += '</ul></div></div></div>';
				}

				COMPRAR = '<div class="input-qtd">';
				COMPRAR += '<input type="number" name="qtd-carrinho" id="qtd-carrinho" value="1" min="1"><span>Qtd</span></div>';
				COMPRAR += '<a href="javascript:void(FuncaoBotaoComprar())" id="funcao-botao-comprar"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Comprar</a>';
			}else{
				$('#preco-produto').hide();
				$('#botao-comprar-produto').css('width', '100%');

				$('.input-qtd').addClass('hidden');
				$('#calcula-frete').addClass('hidden');

				if($("#DIV_FACA_LOGIN").length){
					$("#DIV_FACA_LOGIN").append('<span class="faca-login"><a href="#">Clique aqui para fazer login ou cadastrar-se</a></span>');
				}

			}

			if(obj.lancamento == true){
				ADD += '<span class="tarja-produto">Lan&ccedil;amento</span>';
			}
			if(obj.fretegratis == true){
				ADD += '<span class="tarja-produto">Frete gr&aacute;tis</span>';
			}

		}else{
			
			var PARCELAS = "";

			PARCELAS += '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">';
			PARCELAS += 'Produto indispon&iacute;vel';
			PARCELAS += '</h3></div><div class="panel-body">';
			if (obj.lembrar_disponibilidade != null && obj.lembrar_disponibilidade != undefined) {
				PARCELAS += obj.lembrar_disponibilidade;
			}
			PARCELAS += '</div></div>';
			tabelaParcelas = PARCELAS;
		}

		if (obj.descricoes != null && obj.descricoes != undefined && obj.descricoes.length > 0){
			ACCORDION = '<div class="panel-group hidden-sm hidden-md hidden-lg" id="accordion2" role="tablist" aria-multiselectable="true">';

			for(i = 0; i < obj.descricoes.length; i++){
				
				var descricao = obj.descricoes[i];
				
				if(i == 0){
					TABLIST += '<li role="presentation" class="active descricao-titulo">';
					TABCONTENT += '<div role="tabpanel" class="tab-pane active descricao-conteudo" id="tab-'+i+'">';
					ACCORDION += '<div class="panel panel-default"><div class="panel-heading" role="tab" id="tab-headeing-'+i+'"><a role="button" data-toggle="collapse" data-parent="#accordion2" href="#tab'+i+'" aria-expanded="true" aria-controls="tab'+i+'">'+descricao.titulo+'</a></div><div id="tab'+i+'" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="tab-headeing-'+i+'"><div>';
				}else{
					TABLIST += '<li role="presentation" class="descricao-titulo">';
					TABCONTENT += '<div role="tabpanel" class="tab-pane descricao-conteudo" id="tab-'+i+'">';
					ACCORDION += '<div class="panel panel-default"><div class="panel-heading" role="tab" id="tab-headeing-'+i+'"><a role="button" data-toggle="collapse" data-parent="#accordion2" href="#tab'+i+'" aria-expanded="false" aria-controls="tab'+i+'" class="collapsed">'+descricao.titulo+'</a></div><div id="tab'+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="tab-headeing-'+i+'"><div>';
				}

				TABLIST += '<a href="#tab-'+i+'" aria-controls="tab-'+i+'" role="tab" data-toggle="tab">'+descricao.titulo+'</a>';
				TABLIST += '</li>';

				TABCONTENT += descricao.conteudo;
				TABCONTENT += '</div>';

				ACCORDION += descricao.conteudo;
				ACCORDION += '</div></div></div>';

			}

			if (obj.video) {
				TABLIST += '<li role="presentation" class="descricao-titulo">';
				TABLIST += '<a href="#tab-video" aria-controls="tab-video" role="tab" data-toggle="tab">V&iacute;deo</a>';
				TABLIST += '</li>';

				TABCONTENT += '<div role="tabpanel" class="tab-pane descricao-conteudo" id="tab-video">';
				TABCONTENT += '<div style="position:relative;height:0;padding-bottom:56.21%"><iframe src="https://www.youtube.com/embed/'+obj.video+'?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="641" height="360" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>';
				TABCONTENT += '</div>';

				ACCORDION += '<div class="panel panel-default"><div class="panel-heading" role="tab" id="tab-headeing-'+i+'"><a role="button" data-toggle="collapse" data-parent="#accordion2" href="#tab'+i+'" aria-expanded="false" aria-controls="tab'+i+'" class="collapsed">Video</a></div><div id="tab'+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="tab-headeing-'+i+'"><div>';
				ACCORDION += '<div style="position:relative;height:0;padding-bottom:56.21%"><iframe src="https://www.youtube.com/embed/'+obj.video+'?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="641" height="360" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>';
				ACCORDION += '</div></div></div>';
			}
			ACCORDION += '</div>';

			$('#descricoes').removeClass('hidden');
		}

		if (obj.comentario_facebook) {
			OUTRO += '<div class="div-comentario-face col-xs-12 no-gutter">';
			OUTRO += '<h3>Coment&aacute;rios Facebook</h3>';
			OUTRO += obj.comentario_facebook;
			OUTRO += '</div>';
			$('#descricoes').removeClass('hidden');
		}

		$('[data-wbstr-accordion]').after(ACCORDION).remove();
		$('[data-wbstr-add]').after(ADD).remove();
		$('[data-wbstr-breve]').after(BREVE).remove();
		$('[data-wbstr-infos]').after(INFOS).remove();
		$('[data-wbstr-outro]').after(OUTRO).remove();
		$('[data-wbstr-parcelas]').after(tabelaParcelas).remove();
		$('[data-wbstr-preco]').after(retornoPreco).remove();
		$('[data-wbstr-tabcontent]').after(TABCONTENT).remove();
		$('[data-wbstr-tablist]').after(TABLIST).remove();

		if (obj.disponivel != true) {
			$('.info-produto').addClass('hidden');
			$('#calcula-frete').addClass('hidden');
			$('.sub-produtos').addClass('hidden');
		}

		// função que gera a contagem regressiva
		if(obj.disponivel_ate != null && obj.disponivel_ate != undefined){
			var str = obj.disponivel_ate;
			var sub = Number(str.substr(6, str.length - 8));

			var deadline = new Date(sub);
			var d = new Date();

			if((deadline - d) > 0){
				initializeClock('clockdiv', deadline);
				$('#clockdiv').css('display', 'inline-block');
			}
		}

		ListaProdutosRelacionados();
		
	} catch (e) { console.log('ProdutoDadosRetorno: '+e.message); console.log(ApiWS.Json); }

}
function fotosProduto(OBJ, NOME){
	try{

		var FOTOS = "",
			ZOOM = "",
			FOTO_FLUTUA = "";

		if (OBJ){
			FOTO_FLUTUA = '<img src="'+OBJ[0].normal+'" alt="'+NOME+'" class="img-responsive">';

			if(OBJ.length > 1){
					var FOTOS = '<ul id="foto-principal">';
					var ZOOM = '<ul id="fotos-zoom">';

					for(i = 0; i < OBJ.length; i++){
						FOTOS += '<li data-toggle="modal" data-target="#zoomModal"><img src="'+OBJ[i].normal+'" data-image-thumb="'+OBJ[i].thumb+'" alt="'+NOME+'" class="img-responsive" data-zoom-image="'+OBJ[i].zoom+'"></li>';
						ZOOM += '<li><div class="zoom-modal-holder"><img src="'+OBJ[i].zoom+'" alt="'+NOME+'" class="img-responsive"></div></li>';
					}

					FOTOS += '</ul>';
					ZOOM += '</ul>';

			}else{

				var ZOOM = '<ul id="fotos-zoom">';
				ZOOM += '<li><img src="'+OBJ[0].zoom+'" alt="'+NOME+'" class="img-responsive"></li>';
				ZOOM += '</ul>';

				FOTOS += '<div data-toggle="modal" data-target="#zoomModal"><img src="'+OBJ[0].normal+'" alt="'+NOME+'" class="imagem-unica img-responsive" data-zoom-image="'+OBJ[0].zoom+'"></div>';
			}
		}else{
			FOTO_FLUTUA += '<img src="/lojas/img/fotoindisponivel.jpg" alt="'+NOME+'" class="img-responsive">';

			FOTOS += '<div><img src="/lojas/img/fotoindisponivel.jpg" alt="'+NOME+'" class="imagem-unica img-responsive"></div>';
		}

		$('[data-wbstr-fotos]').after(FOTOS).remove();
		 
		$('[data-wbstr-zoom]').after(ZOOM).remove();

		$('[data-wbstr-foto-flutua]').after(FOTO_FLUTUA).remove();

		$('#fotos-produto').removeClass('loading');

		$('#foto-principal').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots: true,
			asNavFor: '#fotos-zoom',
			customPaging : function(slider, i) {
				var slide = slider.$slides[i].firstChild;
				var thumb = $(slide).attr('data-image-thumb');
				return '<a><img src="'+thumb+'"></a>';
			},
		});

		$('#fotos-zoom').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<i class="fa fa-angle-left slick-prev"></i>',
			nextArrow: '<i class="fa fa-angle-right slick-next"></i>',
			fade: true,
			asNavFor: '#foto-principal'
		});

		$('#zoomModal').on('shown.bs.modal', function () {
			$('#fotos-zoom').resize();
			$('#fotos-zoom').slick("setPosition");
		});

		if(cfg['tipo_zoom'] != null && cfg['tipo_zoom'] != undefined && cfg['tipo_zoom'] == 1){

			$('#foto-principal').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				$('#slick-slide0' + currentSlide + ' > img').removeData('elevateZoom');
				$('.zoomWrapper img.zoomed').unwrap();
				$('.zoomContainer').remove();
			});

			$('#foto-principal').on('afterChange', function(event, slick, currentSlide){
				$('#slick-slide0' + currentSlide + ' > img').elevateZoom();
			});

			if(OBJ.length > 1){
				var zoomItem = $('#slick-slide00 > img');
			}else{
				var zoomItem = $('#fotos-produto > div > img');
			}
			zoomItem.elevateZoom();

		}

	} catch (e) { console.log('fotosProduto: '+e.message)}
}

function PrecosProduto(PRECO, DESCONTO, PARCELAS, MIN, INICIA, JUROS){
	var BOLETO = "";
	var VEZES = "";
	var semJuros = INICIA - 1;
	var tabela = "";
	var parcela = "";

	if (DESCONTO != null && DESCONTO != undefined && DESCONTO != 0) {
		BOLETO = PRECO - DESCONTO;
		BOLETO = AjustaMoney(BOLETO);
		BOLETO = '<p class="prod-preco-uma"><i class="fa fa-money fa-fw"></i> R$'+BOLETO+' &agrave; vista</p>';
	}

	if( (PRECO / PARCELAS) < MIN && PRECO >= MIN ){
		PARCELAS = Math.floor(PRECO / MIN);
	}else if(PRECO < MIN){
		PARCELAS = 1;
	}

	if( semJuros > PARCELAS ){
		semJuros = PARCELAS
	}

	if (INICIA > 1 && PARCELAS > 1) {
		VEZES = PRECO / semJuros;
		VEZES = AjustaMoney(VEZES);
		VEZES = '<p class="prod-preco-parc"><strong><i class="fa fa-credit-card fa-fw"></i> '+semJuros+'x de R$'+VEZES+' sem juros</strong></p>';
	}

	if(PARCELAS > 1){
		for(i = 0; i < PARCELAS; i++){
			var vezes = i + 1;
			if(vezes <= semJuros){
				parcela = PRECO / vezes;
				parcela = AjustaMoney(parcela);
				tabela += '<li class=""><b>'+vezes+'x de R$'+parcela+' sem juros</b></li>';
			}else{
				// var cf = PRECO * Math.pow((1 + (JUROS/100)), vezes);
				parcela = ValorJurosComposto(JUROS, vezes, INICIA, PRECO);
				parcela = AjustaMoney(parcela);
				tabela += '<li class="">'+vezes+'x de R$'+parcela+'</li>';
			}
		}
	}

	return ([BOLETO, VEZES, tabela]);
	// deve retornar preço à vista, parcelado sem juros e tabela de precos
}

function ListaProdutosRelacionados() {
	ApiWS.ListaProdutosRelacionados("ListaProdutosRelacionadosRetorno");
}

function ListaProdutosRelacionadosRetorno() {
	try {
		var template = $('#lista-relacionados').html();

		var OBJETO = ApiWS.Json;
		objetos.ListaProdutosRelacionados = OBJETO;
		var obj = jQuery.parseJSON(OBJETO);

		if(obj != null && obj != undefined){

			$("#lista-relacionados").html("");
			if (obj != null && obj != undefined) {
				if (obj.length > 0) {

					for (a = 0; a < obj.length; a++) {
						var bloco = BlocoProduto(obj[a], template);
						$('#lista-relacionados').append(bloco);
					}

					$('#produtos-relacionados').css({
						opacity: '1',
						visibility: 'visible',
						height: 'auto'
					});

				}
			}


			$('#lista-relacionados').slick({
				infinite: true,
				slidesToShow: 4,
				prevArrow: $('#produtos-relacionados .left-arrow'),
				nextArrow: $('#produtos-relacionados .right-arrow'),
				autoplay: false,
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
				}]
			});

		}else{
			$('#produtos-relacionados').remove();
		}

	} catch (e) { console.log('ListaProdutosUltimosRetorno: ' + e.message); }
}

function FuncaoRecebeJsonSubProdutos(json) {
	try {
		var obj = jQuery.parseJSON(json);
		console.log("teste");
		console.log(obj);


		if(obj.codigo != null && obj.codigo != undefined){
			$('#codigo-produto').html('C&oacute;d.: '+obj.codigo);
		}
		if(obj.nome != null && obj.nome != undefined){
			$('#nome-produto').append(' '+obj.nome);
		}
		if (obj.prazo != null && obj.prazo != undefined){
			if(obj.prazo != 0){
				$('.prazo-produto').html('Disponibilidade: '+obj.prazo+' dias');
			}else{
				$('.prazo-produto').html('Disponibilidade: imediata');
			}
		}

		if (obj.fotos != null && obj.fotos != undefined && obj.fotos.length > 0){
			$('#foto-principal').slick('unslick');
			$('#foto-principal').html('');
			$('#fotos-zoom').slick('unslick');
			$('#fotos-zoom').html('');
			$('.zoomWrapper img.zoomed').unwrap();
			$('.zoomContainer').remove();

			var FOTOS = '';
			var ZOOM = '';

			for(i = 0; i < obj.fotos.length; i++){
				FOTOS += '<li data-toggle="modal" data-target="#zoomModal"><img src="'+obj.fotos[i].normal+'" data-image-thumb="'+obj.fotos[i].thumb+'" alt="'+obj.nome+'" class="img-responsive" data-zoom-image="'+obj.fotos[i].zoom+'"></li>';
				ZOOM += '<li><div class="zoom-modal-holder"><img src="'+obj.fotos[i].zoom+'" alt="'+obj.nome+'" class="img-responsive"></div></li>';
			}

			$('#foto-principal').html(FOTOS);
			$('#fotos-zoom').html(ZOOM);

			$('#foto-principal').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				dots: true,
				asNavFor: '#fotos-zoom',
			    customPaging : function(slider, i) {
			        var slide = slider.$slides[i].firstChild;
			        var thumb = $(slide).attr('data-image-thumb');
			        return '<a><img src="'+thumb+'"></a>';
			    },
			});

			$('#fotos-zoom').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
			  	prevArrow: '<i class="fa fa-angle-left slick-prev"></i>',
				nextArrow: '<i class="fa fa-angle-right slick-next"></i>',
				fade: true,
				asNavFor: '#foto-principal'
			});

			$('#zoomModal').on('shown.bs.modal', function () {
			  $('#fotos-zoom').resize();
			  $('#fotos-zoom').slick("setPosition");
			});

			if(cfg['tipo_zoom'] != null && cfg['tipo_zoom'] != undefined && cfg['tipo_zoom'] == 1){

				$('#foto-principal').on('beforeChange', function(event, slick, currentSlide, nextSlide){
					$('#slick-slide0' + currentSlide + ' > img').removeData('elevateZoom');
					$('.zoomWrapper img.zoomed').unwrap();
	  				$('.zoomContainer').remove();
				});

				$('#foto-principal').on('afterChange', function(event, slick, currentSlide){
					$('#slick-slide0' + currentSlide + ' > img').elevateZoom();
				});

				var zoomItem = $('#foto-principal .slick-slide.slick-active img');
				zoomItem.elevateZoom();
			}

		}

		if (obj.precos != null && obj.precos != undefined) {
			if (obj.precos.preco != 0) {

				var PRECO = Number(obj.precos.preco);
				var PROMOCAO = Number(obj.precos.preco_promocao);
				var VEZES = valores[2];
				var DESCONTO = valores[1];
				var MIN_PARCELA = valores[3];
				var PARCELAS = "";
				
				if (PROMOCAO != 0){

					// if(obj.precos.preco_promocao != valores[0]){

						PORCENTAGEM = ((PRECO - PROMOCAO) / PRECO * 100).toFixed(0);

						retornoPreco = '<p class="preco-promocao">de R$'+AjustaMoney(PRECO)+'</p>';
						retornoPreco += '<p class="preco-produto">por R$'+AjustaMoney(PROMOCAO)+'</p>';

						if (VEZES > 1) {
							var precos = PrecosProduto(PROMOCAO, valores[1], VEZES, MIN_PARCELA, valores[4], valores[5]);
							retornoPreco += precos[0];
							retornoPreco += precos[1];
							PARCELAS = precos[2];
						}

						$('#preco-produto').html(retornoPreco);
						$('#lista-parcelas').html(PARCELAS);

					// }

				}else{

					// if(obj.precos.preco != valores[0]){

						retornoPreco = '<p class="preco-produto">R$'+AjustaMoney(PRECO)+'</p>';
						if (VEZES > 1) {
							var precos = PrecosProduto(PRECO, valores[1], VEZES, MIN_PARCELA, valores[4], valores[5]);
							retornoPreco += precos[0];
							retornoPreco += precos[1];
							PARCELAS = precos[2];
						}

						$('#preco-produto').html(retornoPreco);
						$('#lista-parcelas').html(PARCELAS);

					// }else{

					// }
				}
			}
		}

	} catch (e) { console.log(e.message); }
}

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}

function precoFlutua(){
	if(flutuaAtivo){
	    var T = getScrollTop();

	    if (T >= 300) {
	    	$('#preco-flutua').addClass('active');
	    } else {
	    	$('#preco-flutua').removeClass('active');
	    }
	}
}
var flutuaAtivo = true;
function toggleFlutua(){
	if (flutuaAtivo) {
		$('#preco-flutua').toggleClass('active');
		flutuaAtivo = false;
	}else{
		$('#preco-flutua').toggleClass('active');
		flutuaAtivo = true;
	}
}