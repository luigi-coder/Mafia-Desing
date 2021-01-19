jQuery(document).ready(function( $ ){
    'use strict';
    
    // ==== Menu ====

    // Apariencia
    var menuDesplegable = $('.menu-desplegable');
    var lvl1 = document.createElement('span');
    var lvl2 = document.createElement('span');
    var lvl3 = document.createElement('span');
    var lvl4 = document.createElement('span');
    var lvl5 = document.createElement('span');
    
    niveles();
    function niveles() {
        menuDesplegable.append(lvl1);
        lvl1.className = 'lvl1 animated';
        menuDesplegable.append(lvl2);
        lvl2.className = 'lvl2 animated';
        menuDesplegable.append(lvl3);
        lvl3.className = 'lvl3 animated';
        menuDesplegable.append(lvl4);
        lvl4.className = 'lvl4 animated';
        menuDesplegable.append(lvl5);
        lvl5.className = 'lvl5 animated';
    }
    // Fin Apariencia

    $('#menuresponsive').click(function(){
        var menu = $('.menu');
        var lista = $('.menu .menu-lista');
        var item = $('.menu .menu-lista li');

        if(menu.hasClass('activo') == false){
            menu.addClass('activo');
            lista.css({'animation': 'menu ease 1s forwards'});
            item.css({'animation': 'menuitem ease 1s forwards'});
        } else if(menu.hasClass('activo') == true){
            lista.css({'animation': 'menuoculto ease 1s forwards'});
            item.css({'animation': 'menuitemoculto ease 1s forwards'});
            setTimeout(() => {
                menu.removeClass('activo');
            }, 1000);
        }; 

        item.click(ocultarmenu);
        function ocultarmenu(){
            lista.css({'animation': 'menuoculto ease 1s forwards'});
            item.css({'animation': 'menuitemoculto ease 1s forwards'});
            setTimeout(() => {
                menu.removeClass('activo');
            }, 1000);
        }

    });
    // ==== // Menu ====
    

    // =========== Planes =============
    const btnBase = $('.base');
    const btnOro = $('.oro');
    const btnDiamante = $('.diamante');
    const btnPremium = $('.premium');
    const btnCorreos = $('.correo_empresas');
    const botones = $('.btn-plan');
    const precio = $('#valor');

    const cerrar = $('#planes #cerrar')
    const interfaz = $('#interfazPlanes .titulo');
    const descripcion = $('.descripciones');
    const contenidos = $('.contenidos');
    const servSitios = $('#servicios-sitios');
    const servPremium = $('#servicio-premium');
    const servCorreo = $('#servicio-correo');

    const casillas = $('#cant_correos');
    const secciones = $('#secciones_web');

    botones.click(contratar);
    btnBase.click(planBase);
    btnOro.click(planOro);
    btnDiamante.click(planDiamante);
    btnPremium.click(planPremium);
    btnCorreos.click(planCorreos);
    cerrar.click(cerrarPlanes)

    function planBase(){
        descripcion.css('display', 'flex').animate({opacity: 1});
        interfaz.text('Plan Base');
        contenidos.removeClass('base oro diamante premium');
        contenidos.addClass('base');
        servSitios.addClass('activo');
        servPremium.removeClass('activo');
        servCorreo.removeClass('activo');
        casillas.text('1');
        secciones.text('3');
    }
    function planOro(){
        descripcion.css('display', 'flex').animate({opacity: 1});
        interfaz.text('Plan Oro');
        contenidos.removeClass('base oro diamante premium');
        contenidos.addClass('oro');
        servSitios.addClass('activo');
        servPremium.removeClass('activo');
        servCorreo.removeClass('activo');
        casillas.text('3');
        secciones.text('10');
    }
    function planDiamante(){
        descripcion.css('display', 'flex').animate({opacity: 1});
        interfaz.text('Plan Diamante');
        contenidos.removeClass('base oro diamante premium');
        contenidos.addClass('diamante');
        servSitios.addClass('activo');
        servPremium.removeClass('activo');
        servCorreo.removeClass('activo');
        casillas.text('5');
        secciones.text('20');
    }
    function planPremium(){
        descripcion.css('display', 'flex').animate({opacity: 1});
        interfaz.text('Plan Premium');
        servPremium.addClass('activo');
        servSitios.removeClass('activo');
        servCorreo.removeClass('activo');
    }
    function planCorreos(){
        descripcion.css('display', 'flex').animate({opacity: 1});
        interfaz.text('Correos Empresarial');
        servCorreo.addClass('activo');
        servPremium.removeClass('activo');
        servSitios.removeClass('activo');
    }

    function cerrarPlanes(){
        descripcion.hide().css('opacity', '0');
    }

    function contratar(){
        setTimeout(function() {
            if (contenidos.hasClass('base')) {
                precio.text(500);
            } else if (contenidos.hasClass('oro')){
                precio.text(700);
            } else if (contenidos.hasClass('diamante')) {
                precio.text(900);
            }
        }, 100);
    }
    // ========= Fin Planes ===========
    
    
    // Formulario
    const error = $('#error');
    const campo = $('.campo input');
    const select = $('.campo select');
    const nombre = $('#nombre');
    const apellido = $('#apellido');
    const email = $('#email');
    const telefono = $('#telefono');
    const asunto = $('#asunto');
    const mensaje = $('#mensaje');
    const terminos = $('form #term');
    const enviar = $('form input[type="submit"]');

    nombre.on('blur', validarCampo);
    apellido.on('blur', validarCampo);
    telefono.on('blur', validarCampo);
    asunto.on('blur', validarCampo);
    mensaje.on('blur', validarCampo);
    email.on('blur', validarMail);
    select.on('click', validarSelect);
    enviar.click(validarFormulario);

    function validarMail(){
        if(email.val() == ''){
            $(this).css({
                'border-color': 'red',
                'box-shadow': '0 0 10px red, inset 0 0 10px red'
            });
            error.text('No olvides llenar este campo');
            error.fadeIn(1000);
            } else if(email.val().indexOf('@') == -1 || email.val().indexOf('.') == -1){
                $(this).css({
                    'border-color': 'red',
                    'box-shadow': '0 0 10px red, inset 0 0 10px red'
                });
                error.text('El contenido del campo no es valido');
                error.fadeIn(1000);
            } else {
            $(this).css({
                'border-color': 'var(--color1)',
                'box-shadow': '0 0 10px var(--color1), inset 0 0 10px var(--color1)'
            })
        }
    }

    function validarCampo(){
        
        if($(this).val() == ""){
            error.text('No olvides llenar este campo');
            error.fadeIn(1000);
            $(this).css({
                'border-color': 'red',
                'box-shadow': '0 0 10px red, inset 0 0 10px red'
            });
        }else if($('this').val() !== ""){
            $(this).css({
                'border-color': 'var(--color1)',
                'box-shadow': '0 0 10px var(--color1), inset 0 0 10px var(--color1)'
            })
        }
        
    };

    function validarSelect(){
        
        if($(this).val() == "0"){
            error.text('No olvides llenar este campo');
            error.fadeIn(1000);
            $(this).css({
                'border-color': 'red',
                'box-shadow': '0 0 10px red, inset 0 0 10px red'
            });
        } else if($('this').val() !== "0"){
            $(this).css({
                'border-color': 'var(--color1)',
                'box-shadow': '0 0 10px var(--color1), inset 0 0 10px var(--color1)'
            })
        }
        
    };

    function validarFormulario(){
        if (terminos.is(':checked') == false) {
            error.text('Faltan completar campos');
            terminos.css({
                'border-color': 'red',
                'box-shadow': '0 0 10px red, inset 0 0 10px red'
            });
            error.fadeIn(1000);
            return false
        } 

        for (let i = 0; i < campo.length; i++) {
            const campos = campo[i];
            
            if (campos.value == '' > 0) {
                campos.style.borderColor = 'red';
                campos.style.boxShadow = '0 0 1rem red, inset 0 0 1rem red';
            } 
        }

        for (let i = 0; i < select.length; i++) {
            const selects = select[i];
            
            if (selects.value == 0) {
                selects.style.borderColor = 'red';
                selects.style.boxShadow = '0 0 1rem red, inset 0 0 1rem red';
                return false
            } 
        }


    }

    // Formulario fin

    

});