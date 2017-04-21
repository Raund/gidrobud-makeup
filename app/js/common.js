$(function(){

/***********setting on main*************/
    $(".owl-carousel").owlCarousel({
        autoWidth:true,
        items:4,
        nav:true,
        loop: true,
        autoPlay: 4000,
        dots : false,
        navText : ["",""],
    });
/***********END setting on main*************/

/***********setting for licenses*************/
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
/***********END setting for licenses*************/

/***********project pop-up*************/
    $('.show-project-item').click(function(event){
        var project_id = $(this).attr('data-project-id');
        $('#overlay').fadeIn(400,
            function(){
                // console.log(service_id);
                $('[data-popup-id='+project_id+']')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '45%'}, 200);
            });
        //Popup advice ClOSE
        $('#overlay').click( function(){
            $('[data-popup-id='+project_id+']')
                .animate({opacity: 0, top: '45%'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                    }
                );
        });
        $(document).keydown( function(e) {
            if (e.keyCode === 27) {
                $('[data-popup-id='+project_id+']')
                    .animate({opacity: 0, top: '45%'}, 200,
                        function(){
                            $(this).css('display', 'none');
                            $('#overlay').fadeOut(400);
                        }
                    );
                e.preventDefault();
            }
        });
        event.preventDefault();
    });
/***********END project pop-up*************/

/***********project category tabs*************/
    $('.project-btn-wrapper .btn').click( function (e) {
        var category_id = $(this).attr('data-category-id');
        $('.project-btn-wrapper .btn').removeClass('btn__yellow');
        $(this).addClass('btn__yellow');
        $('.project-category').fadeOut(500);
        $('.project-content').find('[data-project-category='+category_id+']').fadeIn(500);
    });
/***********END project category tabs*************/

});