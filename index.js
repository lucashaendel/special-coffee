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