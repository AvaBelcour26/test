const btnCambiarContenido = document.getElementById('btn_cambiar_contenido');
const parrafo1 = document.querySelector('.parrafo1');

const textos = [
    "El Instituto Técnico Scout es un centro educativo moderno con amplias instalaciones diseñadas para fomentar el aprendizaje y la creatividad. Contamos con laboratorios tecnológicos, aulas equipadas con herramientas digitales, espacios deportivos, y áreas recreativas que promueven el desarrollo integral de nuestros estudiantes. Aquí, combinamos la educación técnica con una formación en valores, en un ambiente dinámico y acogedor.",
    "Aquí en el Instituto Técnico Scout, cada día es una nueva oportunidad para crecer y aprender. Nuestros estudiantes tienen acceso a recursos de vanguardia y reciben una educación personalizada que prepara a cada uno para enfrentar los desafíos del futuro con confianza y habilidades sólidas. Además, fomentamos un ambiente inclusivo y de apoyo donde todos se sienten valorados y motivados para alcanzar sus metas."
];

let textoIndex = 0;

function cambiarTextoConTransicion() {

    parrafo1.classList.add('fade-out');


setTimeout(() => {
    textoIndex = (textoIndex + 1) % textos.length;
    parrafo1.textContent = textos[textoIndex];
    parrafo1.classList.remove('fade-out');
    parrafo1.classList.add('fade-in');


setTimeout(() => {
    parrafo1.classList.remove('fade-in');
    }, 500); 
}, 500); 
}

btnCambiarContenido.addEventListener('click', cambiarTextoConTransicion);
const btnCambiarColor = document.getElementById('btn_cambiar_color');

const colores = [
    { backgroundColor: '#FFFAF0', color: '#333333' }, 
    { backgroundColor: '#ADD8E6', color: '#000080' }, 
    { backgroundColor: '#FFE4E1', color: '#C71585' },
];

let colorIndex = 0;

btn_cambiar_color.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colores.length;
    document.body.style.backgroundColor = colores[colorIndex].backgroundColor;
    document.body.style.color = colores[colorIndex].color;
});