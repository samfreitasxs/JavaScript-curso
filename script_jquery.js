$(function(){
	$('#Azul').click(function(){
		$('p').css("background-color", "blue");
		$('p').fadeOut();
		$('p').delay(1000);
		$('p').fadeIn();
	});

	$('#Vermelho').click(function(){
		$('p').css("background-color", "red");
		$('#mensagem')
			.text("Cor alterada com sucesso!")
			.css({color:'red', border:'1px solid', backgroundColor:'#FF6347'})
			.delay(3000)
			.fadeOut('fast');
	});
});