$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 120){
    	$(".nav-bar").css("background","rgba(0,0,0,1)");
    }
    else{
    	$(".nav-bar").css("background","rgba(0,1,1,0)");
    }
  });
});


function cambiarClase(){
  let siteNav = document.getElementById('site-nav');
  siteNav.classList.toggle('site-nav-open');
  let menuOpen = document.getElementById('menu-toggle');
  menuOpen.classList.toggle('menu-open');
}


window.addEventListener('load', function(){
  new Glider(document.querySelector('.carrousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    // draggable: true,
    duration: 3,
    dots: '.carrousel__indicadores',
    arrows: {
      prev: '.btn-previous',
      next: '.btn-next'
    },
    responsive: [
      {
        // screens greater than >= 800px
        breakpoint: 800,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: '2',
          slidesToScroll: '2',
          itemWidth: 150,
          duration: 1.5
          
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 1.7
        }
      }
    ]

  });

});