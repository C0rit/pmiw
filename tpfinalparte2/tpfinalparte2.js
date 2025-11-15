//Priscila Fernandez 119022/8
//Cory Misha Matorra 120341/8
//Aun nos faltas agregar cosas, pero esto es lo que tenemos de momento.

let videojuego;

function setup() {
  createCanvas(640, 480);
  videojuego = new Juego(50);
}


function draw() {
  videojuego.dibujar();
}

function keyPressed() {
  videojuego.teclaPresionada(keyCode);
}
