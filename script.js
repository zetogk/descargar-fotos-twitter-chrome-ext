$('#btn-cargar-imgs').on('click', function(){
	htmlImgs=[];
	//var resultSelection = $('.AdaptiveMedia-singlePhoto img, .AdaptiveMedia-threeQuartersWidthPhoto img, .AdaptiveMedia-thirdHeightPhoto img');
	var resultSelection = $('.AdaptiveMedia-photoContainer img');
	for(var i=0; i<resultSelection.length; i++){
		htmlImgs.push('<a class="img-zl" href="'+resultSelection[i].currentSrc+'" download="'+i+'.jpg"><img height="100" width="100" src='+resultSelection[i].currentSrc+'></a>');
	}
	//console.log(htmlImgs);
	$('#contenedor-imgs').html('');
	htmlImgs.forEach(function(element, index){
		//alert(element);
		$('#contenedor-imgs').append(element);
	});
});

$('#minimizar-zl').on('click', function(){
	$('#div-zl-descargar-fotos-twitter').css('display','none');
	$('#div-contenedor-maximizar-zl').css('display','block');
});

$('#maximizar-zl').on('click', function(){
	$('#div-zl-descargar-fotos-twitter').css('display','block');
	$('#div-contenedor-maximizar-zl').css('display','none');
});