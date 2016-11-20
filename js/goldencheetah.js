
(function ($) {

    $("[data-toggle='tooltip']").tooltip({html:true});
 
    $(document).delegate('*[data-toggle="ekkoLightbox"]', 'click', function(event) {
                      event.preventDefault();
                      return $(this).ekkoLightbox({
                                                  onShown: function() {
                                                  if (window.console) {
                                                  return console.log('Checking our the events huh?');
                                                  }
                                                  }
                                                  });
                      });
 
    // Initialisation document.ready
    // Tooltips
 

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});
	

	// local scroll
	//jQuery('.navbar').localScroll({hash:true, offset: {top: 0},duration: 900, easing:'easeInOutExpo'});
    jQuery('.jumbotron').localScroll({hash:true, offset: {top: 0},duration: 900, easing:'easeInOutExpo'});

	
	
        $("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

	if (Modernizr.mq("screen and (max-width:1024px)")) {
			jQuery("body").toggleClass("body");
			
	} else {
		var s = skrollr.init({
			mobileDeceleration: 1,
			edgeStrategy: 'set',
			forceHeight: true,
			smoothScrolling: true,
			smoothScrollingDuration: 300,
				easing: {
					WTF: Math.random,
					inverted: function(p) {
						return 1-p;
					}
				}
			});
	}



	//scroll menu
	jQuery('.appear').appear();
	jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.nav li').removeClass('active');
			jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
            
            if (id == "section-download") {
                //jQuery(".navbar").addClass("screenshots");
                //jQuery(".navbar").css('background-color','red');
                //jQuery("section-download").css('background-color','red');

            }
            else {
                //jQuery(".navbar").removeClass("screenshots");

                //if (jQuery(".navbar").css('background-color') == 'rgb(255, 0, 0)')
                //   jQuery(".navbar").css('background-color','black');
            }
		});


		//parallax
        var isMobile = false;

        if(Modernizr.mq('only all and (max-width: 1024px)') ) {
            isMobile = true;
        }

        
        if (isMobile == false && ($('#parallax1').length  ||isMobile == false &&  $('#parallax2').length ||isMobile == false &&  $('#parallax3').length))
        {


            $(window).stellar({
                responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

        }


    // OS detection
	var _os_ = (function(){
                var userAgent = navigator.userAgent.toLowerCase();
                return {
                isWin2K: /windows nt 5.0/.test(userAgent),
                isXP: /windows nt 5.1/.test(userAgent),
                isVista: /windows nt 6.0/.test(userAgent),
                isWin7: /windows nt 6.1/.test(userAgent),
                isMac105: /Mac OS X 10_5/.test(userAgent),
                isMac106: /Mac OS X 10_6/.test(userAgent),
                isMac107: /Mac OS X 10_7/.test(userAgent),
                isMac108: /Mac OS X 10_8/.test(userAgent),
                isMac1012: /mac os x 10_12/.test(userAgent),
                };
                }());

	// get OS shorthand names

	var OS;

    if(_os_.isMac1012){
        OS = "Mac OS Sierra";
        $("#recommended-macsierra").show()
	}
	

})(jQuery);