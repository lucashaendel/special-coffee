const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const hamburger = document.querySelector('.hamburger');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.hamburger span');

hamburger.addEventListener('click', ()=>{
  enlaces.classList.toggle('activado');
  barras.forEach(child => {child.classList.toggle('animado')});

});