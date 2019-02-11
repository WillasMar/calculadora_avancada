$(function(){
	var numero = '';
	var numero1 = 0;
	var numero2 = 0;
	var resultado = 0;
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
		if($('#historico').html() != ''){		
			if($('#numero').val() != ''){
				numero2 = parseInt($('#numero').val());
				
				calcular(); //verificar e calcular os valores

				$('#historico').html(numero1+' '+op+' '+numero2+
					' = '+resultado);

				$('#numero').val('');
				numero = 0;
				numero1 = 0;
				numero2 = 0;
				resultado = 0;
				op = '';
			}
		} 
		document.getElementById('numero').focus();
	});

	$('#raiz').bind('click',function(){
		if($('#numero').val() != ''){
			var n = parseInt($('#numero').val());
			var raiz = Math.sqrt(n);
			$('#historico').html(raiz);

			$('#numero').val('');
			numero = 0;
			numero1 = 0;
			numero2 = 0;
			resultado = 0;
			op = '';

			document.getElementById('numero').focus();

		}
	});
	
	$('#fecharOp').bind('click',function(){
		if(fecharOp == 0){
			//$('.outrasOp').slideUp('slow');
			$('.outrasOp').css('display','flex');
			$('.baixoI').width('+=50');

			fecharOp = 1;
		}else{
			//$('.outrasOp').slideDown('slow');			
			$('.outrasOp').css('display','none');
			$('.baixoI').width('-=50');
			fecharOp = 0;
		}
		
	});
	

	/* o botão igual irá chamar essa função,
	e ela irá verificar a operação e fazer o cálculo */
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
});