var rodada = 1;
var matriz_jogo = Array(3);

$(document).ready(function(){

	$('#btn_iniciar').click(function(){

		//valida digitação
		if($('#in_jogador_1').val()== ''){
			alert('Nick 1 não preenchido');
			return false;
		}

		if($('#in_jogador_2').val()== ''){
			alert('Nick 2 não preenchido');
			return false;
		}

		//exibir nick
		$('#nick_jogador_1').html($('#in_jogador_1').val());
		$('#nick_jogador_2').html($('#in_jogador_2').val());

		//controle de visualizacao
		$('#jogo').show();	
	});

	$('.game').click(function(){
		var id_campo =this.id;
		game(id_campo);
	});

	
	//mod jogador par e jogador impar

	function game(id){
		var icone = '';
		var ponto = 0;

		if((rodada % 2) == 1){
			icone = 'url("imagens/marcacao_1.png")';
			ponto = -1;
		} else {
			icone = 'url("imagens/marcacao_2.png")';
			ponto = 1;
		}
		
		rodada++;

		$('#'+id).css('background-image', icone);

	}

});