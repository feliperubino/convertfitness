$(document).ready(function(){
	isReady("cliente", "Login()");
});

function Login(){
	try{
		var userNome = $('#HD_LVCLI_NOME').val();
		var lojaId = $('#HD_LV_ID').val();

		if (userNome != 'Visitante') {
			$('#link-user').html('<span>N&atilde;o &eacute; voc&ecirc;? <a href="/logoff/'+lojaId+'/logoff" id="link-logoff">Clique aqui</a></span>');
			$('#user-nome').html(userNome);
			$('.link-sair').attr('href', '/logoff/'+lojaId+'/logoff');
			$('.pos-login').css('display', 'inline-block');;
		}else{
			$('#user-nome').html("Visitante");
			$('.pre-login').css('display', 'inline-block');;
		}
	} catch (e) { console.log(e.message); }
}