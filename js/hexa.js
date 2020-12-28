// arreglo con los valores de colores iniciales
const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
/*necesitamos obtener el color en formato hexadecimal de manera aleatoria
por lo que crearemos una variable, para almacenar el valor obtenido, usando
un ciclo for para recorrer el arreglo y extraer los valores necesarios*/
btn.addEventListener("click", function(){
	let hexaColor = "#";
	// ciclo for para recorrer el arreglo y extraer los valores
	for(let i = 0; i < 6; i++){
		hexaColor += hexa[getRandomNumber()]; 
	}
	color.textContent = hexaColor;
	document.body.style.backgroundColor = hexaColor;	
});

// creamos la funcion getRandomNumber para obtener los colores
function getRandomNumber(){
	return Math.floor(Math.random() * hexa.length);
}
