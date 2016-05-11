;(function ($) {
    $(document).ready(function () {

        //menu responsive
        var body = document.body,
            bth = body.querySelector('.ba-toggle'),
            overlay = body.querySelector('.ba-overlay');
        bth.onclick = function () {
            body.classList.toggle('ba-menu-open');
        };
        overlay.onclick = function () {
            body.classList.toggle('ba-menu-open');
        };
        //menu responsive end

        //play video
        $('#play').click(function (e) {
            $(this).hide();
            $("#video")[0].src += "&autoplay=1";
            e.preventDefault();
        });
        //play video end


        //first sliders initialization
        var mainHomeSlider = $('.ba-slider-intro');
        if (mainHomeSlider.length > 0) {
            mainHomeSlider.slick({
                slidesToShow: 1,
                arrows: false,
                slidesToScroll: 1,
                autoplaySpeed: 500,
                autoplay: true
            });
        }

        var sliderProject = $('.ba-slider-projects');
        if (sliderProject.length > 0) {
            sliderProject.slick({
                dots:false,
                slidesToShow: 5,
                arrows: false,
                slidesToScroll: 1,
                autoplaySpeed: 2000,
                asNavFor: '.ba-slider-description',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                        }
                    }]

            });
        }

        var sliderDescription = $('.ba-slider-description');
        if (sliderDescription.length > 0) {
            sliderDescription.slick({
                dots:false,
                slidesToShow: 1,
                arrows: true,
                slidesToScroll: 1,
                asNavFor: '.ba-slider-projects'

            });
        }
        //first sliders initialization end


        //works animation
        var $grid = $('.ba-works').isotope({
            itemSelector: '.ba-works__item',
            masonry: {
                gutter: 10
            }
        });


        // swiperBox
        $('.ba-works__link').swipebox();
        // swiperBox end


        $('.ba-gallery-nav__link').click(function (e) {
            e.preventDefault();
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });
        //works animation end

    });

    //google map
    $(window).load(function () {
        var mapDiv = $('.ba-map')[0];
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 52.1292594, lng: 106.9276662},
            zoom: 5
        });
        var marker = new google.maps.Marker({
            position: {lat: 52.1292594, lng: 106.9276662},
            map: map,
            title: 'Hello World!',
            icon: 'img/marker.png'
        });
        var infowindow = new google.maps.InfoWindow({
            content: 'We are here!',
        });
        infowindow.open(map, marker);
    });
    //google map end
})(jQuery);
