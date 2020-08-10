/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contEdadHombres = 0;
	let contMujeres = 0;
	let edadPromedio;
	let flagHP = 0;
	let acuEdadM = 0;
	let acuEdadF = 0;


	for (let i = 0; i < 5; i++) {
		do {
			nombre = prompt("Ingrese nombre.");
		} while (!(isNaN(nombre)));

		do {
			peso = parseInt(prompt("Ingrese su peso."));

		} while (isNaN(peso) || peso <= 0);

		do {
			sexo = prompt("Ingrese su sexo: f o m");
		} while (!(sexo == "m" || sexo == "f"));

		do {
			edad = parseInt(prompt("Ingrese su edad."));
		} while (edad <= 0 || isNaN(edad));

		if (flagHP == 0 || (sexo == "m" && peso > hombreMaspesado)) {
			hombreMaspesado = peso;
			flagHp = 1;
		}


		switch (sexo) {

			case "m":
				contEdadHombres++;
				acuEdadM = acuEdadM + edad;
				break;

			case "f":
				contMujeres++;
				acuEdadF = acuEdadF + edad;
		}




	}

	edadPromedio = (acuEdadF + acuEdadM) / 5;
	document.write(`La cantidad de mujeres es ${contMujeres}<br>`);
	document.write(`La edad promedio total es de ${edadPromedio}<br>`);
	document.write(`el hombre mas pesado pesa ${hombreMaspesado} kilos <br>`);



}



