var divDescargarFotosTwitter='<div id="div-zl-descargar-fotos-twitter"><h3>Descargar fotos de Twitter</h3><a id="btn-cargar-imgs" class="btn-zl">Cargar imágenes</a><a id="minimizar-zl" class="btn-zl">Minimizar</a><div id="contenedor-imgs"></div></div>';
var divMaximizarDescargarFotosTwitter='<div id="div-contenedor-maximizar-zl"><a id="maximizar-zl" class="btn-zl"	>Maximizar Descarga de fotos</a></div>';
$('head').append("<script type='text/javascript' src='"+chrome.extension.getURL("script.js")+"'></script>");
$('head').append('<link rel="stylesheet" type="text/css" href="'+chrome.extension.getURL("styles.css")+'">');
$('html').append(divDescargarFotosTwitter);
$('html').append(divMaximizarDescargarFotosTwitter);