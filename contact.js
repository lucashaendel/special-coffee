const nombre = document.getElementById ('name');
const apellido = document.getElementById ('last-name');
const correo = document.getElementById ('email');
const telefono = document.getElementById ('phone');
const error = document.getElementById ('error');
error.style.color = 'white';

function enviarFormulario(){
    
    const mensajeError = [];
    
    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingresa tu nombre');
    }
    if(apellido.value === null || apellido.value === ''){
    mensajeError.push('Ingresa tu apellido');
}
  if(correo.value === null || correo.value === ''){
    mensajeError.push('Ingresa tu email');
}
  if(telefono.value === null || telefono.value === ''){
      mensajeError.push('Ingresa tu telefono');
    }
    error.innerHTML = mensajeError.join(',  ');
    
  return false;
}

const hamburger = document.querySelector('.hamburger');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.hamburger span');

hamburger.addEventListener('click', ()=>{
  enlaces.classList.toggle('activado');
  barras.forEach(child => {child.classList.toggle('animado')});

});