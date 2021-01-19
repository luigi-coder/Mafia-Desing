jQuery(document).ready(function($){
  
    const carrusel = $('#carruselTrabajos .contenido');
    const sitio = $('.sitio');
  
    function crearSlides() {
      for (let i = 0; i < sitio.length; i++) {
        var sitios = sitio[i];
        var enlaceSitios = sitios.src;
        var imagenSitio = document.createElement('img');
        var divSitio = document.createElement('div');
  
        divSitio.className += ' website';
        imagenSitio.src = enlaceSitios;
        divSitio.append(imagenSitio);
        carrusel.append(divSitio);
        
      }
    }
  
    crearSlides();
  
    var sitioWeb = $('.website');
    var indice = 1;
    mostrarSitios(indice);
  
    var prev = $('#prev');
    var next = $('#next');
  
    prev.click(function(){
      plusSitio(-1);
    })
    next.click(function(){
      plusSitio(1);
    })
  
  
    sitio.click(function(){
      currentSitio(this.dataset.indice);
    })
  
    function currentSitio(n) {
      mostrarSitios(indice = n);
    }
  
    function plusSitio(n) {
      mostrarSitios(indice += n);
    }
  
    function mostrarSitios(n) {
      var dots = document.getElementsByClassName("sitio");
  
      sitioWeb.removeClass('activo');
  
      if (n > sitioWeb.length) {indice = 1}
      if (n < 1) {indice = sitioWeb.length}
    
      for (let i = 0; i < sitioWeb.length; i++) {
        const sitios = sitioWeb[i];
        sitios.className = 'website';
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activo", "");
      }
    
      sitioWeb[indice-1].className = 'website activo';
      dots[indice-1].className += " activo";
  
    }
  
  
  })