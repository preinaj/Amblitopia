// Añadimos eventos al pulsar los botones para cambiar de animacion
var prev = document.getElementById("prev");
prev.addEventListener("click",plusSlides,false);

var next = document.getElementById("next");
next.addEventListener("click",minusSlides,false);


// Añadimos eventos al pulsar en cada animacion para pausarla o reanudarla
var bloque = document.getElementById("bloque");
bloque.addEventListener("click",move,false);

var bloque1 = document.getElementById("bloque1");
bloque1.addEventListener("click",move1,false);

var bloque2 = document.getElementById("bloque2");
bloque2.addEventListener("click",move2,false);

var bloque3 = document.getElementById("bloque3");
bloque3.addEventListener("click",move3,false);


// Funciones para pausar o reanudar cada una de las animaciones
function move(){
    var circulo = document.querySelector("#circulo");
    var running = circulo.style.animationPlayState === 'running';
    circulo.style.animationPlayState = running ? 'paused' : 'running';
}

function move1(){
    var circulo = document.querySelector("#circulo1");
    var running = circulo.style.animationPlayState === 'running';
    circulo.style.animationPlayState = running ? 'paused' : 'running';

    var circulo2 = document.querySelector("#circulo12");
    var running2 = circulo2.style.animationPlayState === 'running';
    circulo2.style.animationPlayState = running2 ? 'paused' : 'running';

    var circulo3 = document.querySelector("#circulo13");
    var running3 = circulo3.style.animationPlayState === 'running';
    circulo3.style.animationPlayState = running3 ? 'paused' : 'running';

    var circulo4 = document.querySelector("#circulo14");
    var running4 = circulo4.style.animationPlayState === 'running';
    circulo4.style.animationPlayState = running4 ? 'paused' : 'running';
}

function move2(){
    var circulo = document.querySelector("#circulo2");
    var running = circulo.style.animationPlayState === 'running';
    circulo.style.animationPlayState = running ? 'paused' : 'running';
}

function move3(){
    var circulo = document.querySelector("#circulo3");
    var running = circulo.style.animationPlayState === 'running';
    circulo.style.animationPlayState = running ? 'paused' : 'running';

    var circulo2 = document.querySelector("#circulo32");
    var running2 = circulo2.style.animationPlayState === 'running';
    circulo2.style.animationPlayState = running2 ? 'paused' : 'running';

    var circulo3 = document.querySelector("#circulo33");
    var running3 = circulo3.style.animationPlayState === 'running';
    circulo3.style.animationPlayState = running3 ? 'paused' : 'running';

    var circulo4 = document.querySelector("#circulo34");
    var running4 = circulo4.style.animationPlayState === 'running';
    circulo4.style.animationPlayState = running4 ? 'paused' : 'running';
}


// Pasar a animacion de la derecha
function plusSlides() {
  showSlides(slideIndex -= 1);
}

// Pasar a animacion de la izquierda
function minusSlides() {
    showSlides(slideIndex += 1);
}

// Mostrar la animacion pasada por argumento
function showSlides(n) {
  let i;
  let j;
  let slides = document.getElementsByClassName("bloque");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    for(j=0; j< slides[i].childNodes.length;j++){
      if (slides[i].childNodes[j].nodeName!="#text") {
        slides[i].childNodes[j].style.animationPlayState = "paused"
      }
    }
  }
  slides[slideIndex-1].style.display = "grid";
  slides[slideIndex-1].style.height = "100%";
  slides[slideIndex-1].style.justifyItems = "center";
  slides[slideIndex-1].style.alignItems = "center";

  var numeros = document.getElementById("numeros");
  numeros.innerHTML = slideIndex + "/4";

}


// Mostramos la primera animacion
let slideIndex = 1;
showSlides(slideIndex);