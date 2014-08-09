
// Función mouse sobre el link

function mybar (obj) {

	obj.className = "bar1";

	var p = obj.getElementsByTagName('p');
	
	for (i=0; i < p.length; i++) {
		p[i].className= "menu_bar1";
}

	var img = obj.getElementsByTagName('img');
	
	for (i=0; i < p.length; i++) {
		img[i].className= "img_menu1";
		img[i].style.visibility= "visible";
}

}

//Función mouse fuera del link

function mybarout (obj) {
	obj.className = "bar";

	var p = obj.getElementsByTagName('p');

	for (i=0; i < p.length; i++) {
		p[i].className= "menu_bar";
}

	var img = obj.getElementsByTagName('img');
	
	for (i=0; i < p.length; i++) {
		img[i].className= "img_menu";
		img[i].style.visibility= "hidden";
}

}

//Función saludo inicial

function saludo() {

	var name = prompt("Ingresa tu nombre", "Tu nombre aquí");

	if (name != null, name !="", name != "Tu nombre aquí" ) {
		alert("¡Bienvenido "+ name+ "!\n Gracias por tu visita");
} else {
		alert("Por favor, ingresa tu nombre.");
}
}
