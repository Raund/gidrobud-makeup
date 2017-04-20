$(function(){

    $(".owl-carousel").owlCarousel({
        autoWidth:true,
        items:4,
        nav:true,
        loop: true,
        autoPlay: 4000,
        dots : false,
        navText : ["",""],
    });

    $('.flex-gallery').each(function(){
        $(this).unitegallery({
            gallery_theme: "tilesgrid",
            gallery_width:"100%",              //gallery width
            grid_space_between_cols:15,
            grid_space_between_rows:5,
            grid_space_between_mobile:0,
            tile_enable_border:false,
            tile_enable_shadow:false,
            grid_padding:0,
            tile_width: 255,						//tile width
            tile_height: 365,
            grid_num_rows:10
        });
    });

});