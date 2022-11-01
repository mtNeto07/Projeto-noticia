jQuery(document).ready(function($) {
	window.onscroll =  function (){
		if(window.pageYOffset > 140){
			$('#header').addClass("active");
		}else{
			$('#header').removeClass("active");
		}
	};
	//isotope

	let btns = $("#servicos .button-group button");
	btns.click(function(e){
       $("#servicos .button-group button").removeClass("active");
	   e.target.classList.add("active");

	   let selector = $(e.target).attr("data-filter");
	   $("#servicos .grid").isotope({
	   	filter: selector,
	   });
	});

    $(window).on("load", function(){
    	 $("#servicos .grid").isotope({
	   	filter: "*",
    });

   });

    //magnific

    $(".grid .popup-link").magnificPopup({
    	
    	_currPopupType:"image",
    	gallery:{
    		enabled:true,
    		tPrev:"anterior",
    		tNext:"proxíma",
    		tCounter: "%curr% de%total%",
    	},
    });


     $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: { 
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

});

