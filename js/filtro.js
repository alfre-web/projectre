$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
            
        }
    });

    let sobrem = $('#sobrem').offset().top,
        servicios = $('#servicios').offset().top,
        princi = $('#princi').offset().top,
        galeria = $('#galeria').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let about = $('#sobrem').offset().top,
        servicio = $('#servicios').offset().top,
        principal = $('#princi').offset().top,
        galeria = $('#galeria').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });
    
    $('#enlace-acerca').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: sobrem 
        },600);
    });

    $('#enlace-servicios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios -70
        },600);
    });

    $('#enlace-principal').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: princi -70
        },600);
    });

    $('#enlace-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria -70
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto 
        },600);
    });
});
