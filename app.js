var = {
	UF:  ,
	DOLAR:  ,
	UTM: ,
	EURO: ,
}

$(function(){


	$.ajax({

		url: 'link mindicador'
	})

	.then(function(data){

		indicadores = data;
		$('.usd').text(data.dolar.valor);
		$('.euro').text(data.euro.valor);
		$('.uf').text(data.uf.valor);
		$('.utm').text(data.utm.valor);
	})


	$('#conversion-to-clp').submit(function(e) {
		e.prevetDefault();
		let amount = $(this).find('.amount').val();
		let result = indicadores.dolar.valor * amount;
		$(this).find('card__result .valor').text(result.toFixed(2));
	})

})