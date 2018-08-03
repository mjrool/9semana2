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
		if (indicadores == null) {
			alert('espera');
			return;
		}



		let amount = $(this).find('.amount').val();
		let divisa = $(this).find('.tipo_conversion').val();
		let result = indicadores[divisa]valor * amount;
		let unidad_medida = indicadores[divisa].unidad_medida;
		$(this).find('card__result .valor').text(result.toFixed(2));
		$(this).find('card__result .tipo_cambio').text(unidad_medida);
	})

})