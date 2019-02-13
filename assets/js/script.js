$(function(){
	var numero = '';
	var numero1 = '';
	var numero2 = '';
	var resultado = '';
	var op = '';	
	var fecharOp = 0; //fechar a aba de outras operações

	/* ao clicar nos número será adicionado no campo */
	$('.bt').bind('click',function(){
		numero = $('#numero').val();
		numero += $(this).html();
		$('#numero').val(numero);
		document.getElementById('numero').focus();
	});

	/* ao clicar na operação de soma, subtração, multiplicação
	e divisão será exibido no campo histórico o que está no
	campo que o usuário digitou */
	$('.op').bind('click',function(){
		if($('#numero').val() != ''){
			resultado = '';
			numero1 = parseInt($('#numero').val());
			op = $(this).html();			
			$('#historico').html(numero1+' '+op+' ');
			
			$('#numero').val(''); //zera o campo que digita
			numero = ''; //zera o número digitado			
		}
		document.getElementById('numero').focus();
	});

	/* ao clicar no botão igual será pego o que o usuário digitou
	e armazenado para depois verificar qual cálculo será feito */
	$('#igual').bind('click',function(){
		if(numero1 != '' && op != '' 
			&& $('#numero').val() != '' &&
			resultado == ''){		
			
			numero2 = parseInt($('#numero').val());
			
			calcular(); //verificar e calcular os valores

			$('#historico').html(numero1+' '+op+' '+numero2+
				' = '+resultado);

			$('#numero').val('');
			numero = '';
			numero1 = '';
			numero2 = '';
			op = '';
		
		} 
		document.getElementById('numero').focus();
	});

	/* botão que limpa tudo */
	$('#limpar').bind('click', function(){
		$('#historico').html('');
		$('#numero').val('');
		numero = '';
		numero1 = '';
		numero2 = '';
		resultado = '';

		document.getElementById('numero').focus();
	});

	/* botão da raiz quadrada */
	$('#raiz').bind('click',function(){
		if($('#numero').val() != ''){
			var n = parseInt($('#numero').val());
			var raiz = Math.sqrt(n);
			$('#historico').html(raiz);

			$('#numero').val('');
			numero = '';
			numero1 = '';
			numero2 = '';
			resultado = '';
			op = '';
		}
		document.getElementById('numero').focus();
	});

	/* botão do 1 divide por x */
	$('#dividirPorX').bind('click',function(){
		if($('#numero').val() != ''){
			var n = parseInt($('#numero').val());
			var x = 1 / n;
			$('#historico').html(x);

			$('#numero').val('');
			numero = '';
			numero1 = '';
			numero2 = '';
			resultado = '';
			op = '';
		}
		document.getElementById('numero').focus();
	});

	/* botão de porcentagem */
	$('#percentual').bind('click',function(){
		if(numero1 != '' && op != '' && $('#numero').val() != ''){
			numero2 = parseInt($('#numero').val());
			
			calcularPercentual();

			$('#historico').html(numero1+' '+op+' '+numero2+
				'% = '+resultado);

			$('#numero').val('');
			numero = '';
			numero1 = '';
			numero2 = '';
			resultado = '';
			op = '';	
		}
		document.getElementById('numero').focus();
	});
	
	$('#fecharOp').bind('click',function(){
		if(fecharOp == 0){
			$('.baixoI').animate({
				'width':'+=50px'
			},500);

			$('.outrasOp').animate({
				'margin-left':'-0px'
			}, {
					duration:500,
					complete:function(){
						$('.fecharOp img').attr('src','assets/img/setaEsquerda.png');
					}
			});			

			fecharOp = 1;
		}else{
			$('.outrasOp').animate({
				'margin-left':'-51px'
			},500);

			$('.baixoI').animate({
				'width':'-=50px'
			}, {
					duration:500,
					complete:function(){
						$('.fecharOp img').attr('src','assets/img/setaDireita.png');
					}
			});			

			fecharOp = 0;
		}
		document.getElementById('numero').focus();
		
	});
	

	/* o botão igual irá chamar essa função,
	e ela irá somar, subtrair, multiplicar ou dividir */
	function calcular(){
		switch(op){
			case "+":
				resultado = numero1 + numero2;
				break;
			case "-":
				resultado = numero1 - numero2;
				break;
			case "*":
				resultado = numero1 * numero2;
				break;
			case "÷":
				resultado = numero1 / numero2;
				break;
		}
	}

	/* o botão percentual irá chamar essa função,
	e ela irá calcular a porcentagem */
	function calcularPercentual(){
		switch(op){
			case "+":
				resultado = numero1 + ((numero1 / 100) * numero2);
				break;
			case "-":
				resultado = numero1 - ((numero1 / 100) * numero2);
				break;
			case "*":
				resultado = (numero1 / 100) * numero2;
				break;
			case "÷":
				resultado = (numero1 / 100) * numero2;
				break;
		}
	}
});