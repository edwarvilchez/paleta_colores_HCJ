// arreglo con los valores de colores iniciales
const colors = ["green", "red", "rgba(133,122,200)", "#F15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//agregamos el evento del botón para modificar el DOM
btn.addEventListener("click", function(){
	// obtenemos un numero aleatorio entre 0 y 3
	const randomNumber = getRandomNumber();
	console.log(randomNumber); // imprimimos en consola el nro del color
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});
// funcion que nos permite obtener el nro del color de manera aleatoria
function getRandomNumber(){
	return Math.floor(Math.random() * colors.length);
}