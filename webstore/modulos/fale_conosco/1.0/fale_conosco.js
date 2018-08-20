$(document).ready(function(){
	try{
		if ($("#HdEtapaLoja").val() == "CONTATO") {
			isReady("objetos.InfosLojas", "FaleConosco()");
		}
	} catch (e) { console.log(e.message); }
});

function FaleConosco(){

	importContato();

	var OBJ = objetos.InfosLojas;
	var obj = jQuery.parseJSON(OBJ),
		contato = obj.dadoscontato,
		estrutura = obj.estrutura,
		institucional = obj.menuinstitucional,
		item = "",
		li = "",
		links = obj.links,
		social = obj.redes_sociais;

	if (contato) {
		if(
			contato.email_1.length > 0 ||
		 	contato.fone_1.length > 0 ||
		 	contato.fone_3.length > 0
		){	
			item += "<ul class='direita-info'><h3>Informa&ccedil;&otilde;es de contato</h3>";

			if(contato.horario){
				li += '<li><i class="fa fa-fw fa-clock-o"></i>'+contato.horario+'</li>';
			}
			if(contato.fone_1){
				var fone1 = clearNum(contato.fone_1);
				li += '<li><a href="tel:+55'+fone1+'"><i class="fa fa-fw fa-phone"></i>'+contato.fone_1+'</a></li>';
			}
			if(contato.fone_2){
				var fone2 = clearNum(contato.fone_2);
				li += '<li><a href="tel:+55'+fone2+'"><i class="fa fa-fw fa-phone"></i>'+contato.fone_2+'</a></li>';
			}
			if(contato.fone_3){
				var fone3 = clearNum(contato.fone_3);
				li += '<li><a href="http://api.whatsapp.com/send?1=pt_BR&phone=55'+fone3+'" target="_blank" rel="noopener"><i class="fa fa-fw fa-whatsapp"></i>'+contato.fone_3+'</a></li>';
			}
			if(contato.email_1){
				li += '<li><a href="mailto:'+contato.email_1+'?subject=Contato Loja Virtual"><i class="fa fa-fw fa-envelope-o"></i>'+contato.email_1+'</a></li>';
			}
			if(contato.email_2){
				li += '<li><a href="mailto:'+contato.email_2+'?subject=Contato Loja Virtual"><i class="fa fa-fw fa-envelope-o"></i>'+contato.email_2+'</a></li>';
			}
			if(contato.email_3){
				li += '<li><a href="mailto:'+contato.email_3+'?subject=Contato Loja Virtual"><i class="fa fa-fw fa-envelope-o"></i>'+contato.email_3+'</a></li>';
			}

			item += li;
			item += "</ul>";

			li = '';
		}

		if(contato.endereco){

			item += "<ul class='direita-endereco'><h3>Nosso endere&ccedil;o</h3>";

			li += '<li><p><i class="fa fa-fw fa-map-marker"></i>'+contato.endereco;
			if(contato.numero != null && contato.numero != undefined && contato.numero.length > 0){
				li += ', '+contato.numero;
			}
			if(contato.complemento != null && contato.complemento != undefined && contato.complemento.length > 0){
				li += ', '+contato.complemento;
			}
			if(contato.bairro != null && contato.bairro != undefined && contato.bairro.length > 0){
				li += ', '+contato.bairro;
			}
			if(contato.cidade != null && contato.cidade != undefined && contato.cidade.length > 0){
				li += ' - '+contato.cidade;
			}
			if(contato.uf != null && contato.uf != undefined && contato.uf.length > 0){
				li += ' - '+contato.uf;
			}
			if(contato.cep != null && contato.cep != undefined && contato.cep.length > 0){
				li += '<br />CEP: '+contato.cep;
			}
			li += '</p></li>';

			item += li;
			item += "</ul>";

			li = '';

		}	

		if(contato.razao && contato.cnpj){

			item += "<ul class='direita-dados'><h3>Dados da empresa</h3>";

			item += '<li>'+contato.razao+'</li>';
			item += '<li>'+contato.cnpj+'</li>';
			
			item += "</ul>";
				
		}

	}
	if (social) {
		if (
			social.facebook ||
			social.twitter ||
			social.linkedin ||
			social.instagram ||
			social.youtube ||
			social.pinterest ||
			social.google
		){

			item += "<ul class='direita-social'><h3>Redes sociais</h3>";

			if (social.facebook){
				li += '<li><a href="https://www.facebook.com/'+social.facebook+'" target="_blank" rel="noopener">';
				li += '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span>';
				li += '</a></li>';
			}
			if (social.twitter){
				li += '<li><a href="https://www.twitter.com/'+social.twitter+'" target="_blank" rel="noopener">';
				li += '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span>';
				li += '</a></li>';
			}
			if (social.linkedin){
				li += '<li><a href="https://www.linkedin.com/'+social.linkedin+'" target="_blank" rel="noopener">';
				li += '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-linkedin fa-stack-1x fa-inverse"></i></span>';
				li += '</a></li>';
			}
			if (social.instagram){
				li += '<li><a href="https://www.instagram.com/'+social.instagram+'" target="_blank" rel="noopener">';
				li += '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-instagram fa-stack-1x fa-inverse"></i></span>';
				li += '</a></li>';
			}
			if (social.youtube){
				li += '<li><a href="https://www.youtube.com/'+social.youtube+'" target="_blank" rel="noopener">';
				li += '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-youtube fa-stack-1x fa-inverse"></i></span>';
				li += '</a></li>';
			}
			if (social.pinterest){
				li += '<li><a href="https://www.pinterest.com/'+social.pinterest+'" target="_blank" rel="noopener">';
				li += '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-pinterest fa-stack-1x fa-inverse"></i></span>';
				li += '</a></li>';
			}
			if (social.google){
				li += '<li><a href="https://plus.google.com/'+social.google+'" target="_blank" rel="noopener">';
				li += '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-google-plus fa-stack-1x fa-inverse"></i></span>';
				li += '</a></li>';
			}

			item += li;
			item += "</ul>";
			li = '';
		}

	}

	$('#div-barra-direita').removeClass('hidden').append(item).addClass('col-sm-4 col-xs-12');
	$('#div-conteudo').addClass('col-sm-8 col-xs-12');

	if (
		!contato.email_1 &&
	 	!contato.fone_1 &&
	 	!contato.fone_3 &&
	 	!contato.razao &&
	 	!contato.endereco &&
		!social.facebook &&
		!social.twitter &&
		!social.linkedin &&
		!social.instagram &&
		!social.youtube &&
		!social.pinterest &&
		!social.google
	){
		$('#div-barra-direita').addClass('hidden');
		$('#div-conteudo').removeClass('col-sm-8');
	}
}

function importContato(){
	ApiWS.ImportFile("estrutura/html/faleconosco.html", "retornoContato");
}

function retornoContato(){
	var retorno = ApiWS.FileReturn;
	$('.DivMioloConteudo2').html(retorno);
}
