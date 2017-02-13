
//$(document).bind('touchmove', touch).bind('touchend', touchend).bind('scroll', touch);
$(document).ready(function(){
	 $('.keeng-icon-search').click(function (e) {
        $('.form-search').show();
        $('.search-keeng-txt').focus();
        $('.keeng-logo').hide();
    });
    $('body').click(function (event) {
        if (!$(event.target).closest('.keeng-search-form').length) {
            $('.form-search').hide();
            $('.keeng-logo').show();
        };
    });
	
	/*slider*/
	if(document.getElementById('slider_owl_keeng'))
	{
	$('.slider-owl-keeng').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    })   
	}
	
	if(document.getElementById("cate_hot_swiper"))
	{
		var swiper = new Swiper('#cate_hot_swiper', {
			slidesPerView:'auto',                
			paginationClickable: true
		});
	}
	$('.keeng-mn').click(function()
	{
		$(".keeng-menu-wrap").slideToggle(1);
	});
  /* jQuery('.menu-netnews').click(function(e){
					jQuery(".wrap_menu").slideToggle(1);
					jQuery("#header").toggleClass("right240");
					jQuery("#body").toggleClass("right240");
					jQuery(this).toggleClass("_hd-btn-menu");
					
						if(jQuery(this).hasClass('_hd-btn-menu')) {
                                            var target_top = jQuery("#wrapper").offset().top;
                                            jQuery('html, body').animate({scrollTop:target_top}, 0);
                                            jQuery('.vg_mask').show();

                               } else {

                                             jQuery("#wrapper").height("auto");
                                             jQuery('.vg_mask').hide();
                               }
					
					
			})
				jQuery('.vg_mask').click(function() {
			    jQuery('.menu-netnews').click();
			});   */ 
});    
//var expand = 0;
//var position = 0;
//var header_h = 0;
//var up = false;
//var myScroll = null;
//var IsIChrome = navigator.userAgent.search("CriOS") >= 0 ? true : false;
//var IsISafari = /safari/.test(navigator.userAgent.toLowerCase());
//var IsIos = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);

//$(function () {
//    //refreshScroller();
//    //updateScrollerPosition();
//    header_h = $("#header").height();
//    if (IsIos) $("#header").css("box-shadow", "0px 2px 5px black");
//});

//document.addEventListener("touchmove", touchMove, false);
//document.addEventListener("scroll", Scroll, false);

//function touchMove() {
//    if (expand == 0) {
//        var scroll = $(window).scrollTop();
//        if (scroll > position) {
//            if (scroll > header_h + 50) {
//                // $("#header").hide();
//                //$(".wrap_header").css("height", "100px");
//                //$(".menuhtml").show();
//                $("#header").addClass("animated fadeInDown");
//                //updateScrollerPosition();    
//                iden1 = 0;
//                up = false;
//            }
//        } else if (position > scroll + 5) {
//            if ($(window).scrollTop() > header_h) {
//                    if (iden1 == 0) {
//                        $("#header").css("position", "fixed");
//                        if (IsIChrome) {
//                            $(".empty").show();
//                        }
//                        $("#header").show();

//                        iden1 = 1;
//                        //myScroll.refresh();
//                        up = true;
//                    } 
//            }
//            else {
//                //$("#header_menu").css("top", "0");
//                $(".empty").hide();
//                //$("#header_menu").css("position", "");
//                $("#header").removeClass("animated");
//                $("#header").removeClass("fadeInDown");
//                up = false;
//            }
//        }
//        if (up && scroll <= 50) {
//            $(".empty").hide();
//        }
//        position = scroll;
//    }
//}

//function Scroll() {
//    if (expand == 0) {
//        var scroll = $(window).scrollTop();
//        if (scroll > position) {
//            if (scroll > header_h + 50) {
//               // $("#header").hide();
//                //$(".menuhtml").show();
//                //$(".wrap_header").css("height", "100px");
//                //updateScrollerPosition();    
//                iden1 = 0;
//                up = false;
//            }
//        } else if (position > scroll + 5) {
//            if ($(window).scrollTop() > header_h) {
//                if (iden1 == 0) {
//                    $("#header").css("position", "fixed");
//                    if (IsIChrome) {
//                        //                            $("#header_menu").css("top", "40px");
//                        $(".empty").show();
//                    }
//                    $("#header").show();
//                    //$("#header_menu").addClass("animated fadeInDown");
//                    iden1 = 1;
//                    //myScroll.refresh();
//                    up = true;
//                }
//            }
//            else {
//                //                    $("#header_menu").css("top", "0");
//                //                    $("#header_menu").css("position", "");
//                $(".empty").hide();
//                $("#header").removeClass("animated");
//                $("#header").removeClass("fadeInDown");
//                
//                up = false;
//            }
//        }
//        if (up && scroll <= 50) {
//            $(".empty").hide();
//        }
//        position = scroll;
//    }
//}



//function restoreMenuState() {
//    $("#header").animate({ "top": "0" }, 500);
//    up = false;
//}
