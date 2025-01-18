const body = document.querySelector('body');
const footer = document.querySelector('.footer');
const main = document.createElement('MAIN');

body.insertBefore(main,footer);

main.classList.add('main');
main.classList.add('contenedor');

/////////////////////   DIV CONTENIDO     ///////////////////////////
const sectionContendio = document.createElement('SECTION');
const divImagen = document.createElement('DIV');
const imagen = document.createElement('IMG');
const divDescripcion = document.createElement('DIV');
const titulo = document.createElement('H2');
const parrafo = document.createElement('P');

sectionContendio.classList.add('section-contenido');
divImagen.classList.add('divImagen');
divDescripcion.classList.add('divDescripcion');

sectionContendio.style.display = 'flex';
sectionContendio.style.alignItems = 'center';
divImagen.style.display = 'flex';
divImagen.style.flexBasis = 'calc(50% - 2rem)';
divImagen.style.justifyContent = 'center';
divDescripcion.style.flexBasis = 'calc(50% - 2rem)';
sectionContendio.style.justifyContent = 'space-between';

imagen.setAttribute('src','img/imagen.JPG');
imagen.style.borderRadius = '35px';
titulo.textContent = 'What your BMI result means'
parrafo.textContent = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself'

sectionContendio.appendChild(imagen);
sectionContendio.appendChild(divDescripcion);
sectionContendio.appendChild(divImagen);
sectionContendio.insertBefore(divImagen,divDescripcion);
divDescripcion.appendChild(titulo);
divDescripcion.appendChild(parrafo);
divImagen.appendChild(imagen);

/////////////////////   DIV CARACTERISTICAS     ///////////////////////////
const sectionCaracteristicas = document.createElement('SECTION');
const div_salud = document.createElement('DIV');
const imagen_salud = document.createElement('IMG');
const titulo_salud = document.createElement('H3');
const texto_salud = document.createElement('P');

sectionCaracteristicas.classList.add('section-caracteristicas');
sectionCaracteristicas.style.backgroundColor = '#EBF7FF';
sectionCaracteristicas.style.display = 'flex';
sectionCaracteristicas.style.gap = '8rem';
sectionCaracteristicas.style.marginTop = '18rem'
sectionCaracteristicas.style.padding = '8rem';
sectionCaracteristicas.style.borderRadius = '35px';

imagen_salud.setAttribute('src','img/ramen.JPEG');
imagen_salud.style.width = '15rem';
imagen_salud.style.height = '15rem';
imagen_salud.style.borderRadius = '50%';
titulo_salud.textContent = 'Healthy eating';
texto_salud.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi';

div_salud.classList.add('salud');
div_salud.appendChild(imagen_salud);
div_salud.appendChild(titulo_salud);
div_salud.appendChild(texto_salud);

const div_ejercicio = document.createElement('DIV');
const imagen_ejercicio = document.createElement('IMG');
const titulo_ejercicio = document.createElement('H3');
const texto_ejercicio = document.createElement('P');


imagen_ejercicio.setAttribute('src','img/mancuerna.JPG');
imagen_ejercicio.style.width = '15rem';
imagen_ejercicio.style.height = '15rem';
imagen_ejercicio.style.borderRadius = '50%';
titulo_ejercicio.textContent = 'Regular exercise';
texto_ejercicio.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi';

div_ejercicio.classList.add('ejercicio');
div_ejercicio.appendChild(imagen_ejercicio);
div_ejercicio.appendChild(titulo_ejercicio);
div_ejercicio.appendChild(texto_ejercicio);

const div_dormir = document.createElement('DIV');
const imagen_dormir = document.createElement('IMG');
const titulo_dormir = document.createElement('H3');
const texto_dormir = document.createElement('P');

imagen_dormir.setAttribute('src','img/dormir.JPG');
imagen_dormir.style.width = '15rem';
imagen_dormir.style.height = '15rem';
imagen_dormir.style.borderRadius = '50%';
titulo_dormir.textContent = 'Adequate sleep'
texto_dormir.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi';

div_dormir.classList.add('dormir');
div_dormir.appendChild(imagen_dormir);
div_dormir.appendChild(titulo_dormir);
div_dormir.appendChild(texto_dormir);

sectionCaracteristicas.appendChild(div_salud);
sectionCaracteristicas.appendChild(div_ejercicio);
sectionCaracteristicas.appendChild(div_dormir);

div_salud.style.width = '100%'; 
div_ejercicio.style.width = '100%';
div_dormir.style.width = '100%';

main.appendChild(sectionContendio);
main.appendChild(sectionCaracteristicas);

main.style.marginTop = '18rem';
main.style.display = 'flex';
main.style.flexDirection = 'column';

/* RESPONSIZE DESIGN  */
// En _main.scss

