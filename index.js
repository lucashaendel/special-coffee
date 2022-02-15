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


const hamburger = document.querySelector('.hamburger');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.hamburger span');

hamburger.addEventListener('click', ()=>{
  enlaces.classList.toggle('activado');
  barras.forEach(child => {child.classList.toggle('animado')});

});


window.addEventListener('load', function(){
  new Glider(document.querySelector('.carrousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    // draggable: true,
    duration: 2,
    dots: '.carrousel__indicadores',
    arrows: {
      prev: '.btn-previous',
      next: '.btn-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 800,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: '2',
          slidesToScroll: '2',
          itemWidth: 150,
          duration: 2
          
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 2
        }
      }
    ]

  });

});