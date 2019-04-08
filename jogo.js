var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

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
		$('#' + id_campo).off();
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

		var linha_coluna = id.split('-');
		matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

		verifica_jogada();

	}

	function verifica_jogada(){

		//verifica horizontal
		var pontos =0;
		for(var i=1; i <= 3; i++){
			pontos = pontos + matriz_jogo['a'][i];
		}
		verifica_ganhador(pontos);

		pontos =0;
		for(var i=1; i <= 3; i++){
			pontos = pontos + matriz_jogo['b'][i];
		}
		verifica_ganhador(pontos);

		pontos =0;
		for(var i=1; i <= 3; i++){
			pontos = pontos + matriz_jogo['c'][i];
		}
		verifica_ganhador(pontos);

		//verifica na vertical
		for(var l=1; l <= 3; l++){
			pontos =0;
			pontos += matriz_jogo['a'][l];
			pontos += matriz_jogo['b'][l];
			pontos += matriz_jogo['c'][l];

			verifica_ganhador(pontos);
		}

		//verifica diagonal
		pontos =0;
		pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
		verifica_ganhador(pontos);

		pontos =0;
		pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
		verifica_ganhador(pontos);
	}

	function verifica_ganhador(pontos){
		if (pontos == -3) {
			var player_1 = $('#in_jogador_1').val();
			alert(player_1 + ' ganhou!');
			$('.game').off();
		}
		else if(pontos == 3){
			var player_2 = $('#in_jogador_2').val();
			alert(player_2 + ' ganhou!');
			$('.game').off();
		}

	}

});