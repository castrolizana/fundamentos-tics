
document.addEventListener('DOMContentLoaded',()=>{
 const form=document.querySelector('#contact-form');
 if(form){form.addEventListener('submit',e=>{e.preventDefault();const notice=document.querySelector('#form-notice');notice.style.display='block';notice.textContent='¡Gracias! Tu mensaje fue preparado correctamente. Este formulario es una demostración y no envía datos a un servidor.';form.reset();});}
});
