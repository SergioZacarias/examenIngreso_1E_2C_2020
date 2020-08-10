/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexo;
	let lugar;
	let temporada;
	let cantidadPax;
	let contBarilo = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let respuesta = "si";
	let lugarMelegido;
	let contPax = 0;
	let acuPax = 0;
	let promedioPaxInv;
	let flagF = 0;
	let flagM = 0;
	let sexoTitularMaxPax;

	do {

		do {
			sexo = prompt("Ingrese su sexo: f o m");
		} while (!(sexo == "m" || sexo == "f"));
		do {
			lugar = prompt("Ingrese destino. salta, bariloche o cataratas");
		} while (!(lugar == "bariloche" || lugar == "salta" || lugar == "cataratas"));
		do {
			temporada = prompt("Ingrese temporada: invierno, otoño, primavera o verano");
		} while (!(temporada == "otoño" || temporada == "invierno" || temporada == "primavera" || temporada == "verano"));
		do {
			cantidadPax = prompt("Ingrese cantidad de pasajeros.");
		} while (cantidadPax <= 0 || isNaN(cantidadPax));


		switch (lugar) {
			case "bariloche":
				contBarilo++;
				break;

			case "cataratas":
				contCataratas++;
				break;

			case "salta":
				contSalta++;
				break;
		}
		if (temporada == "invierno") {
			acuPax = acuPax + cantidadPax;
			contPax++;
		}
		if (flagM == 0 || (sexo == "m" && cantidadPax > maximoPaxM)) {
			maximoPaxM = cantidadPax;
			flagM = 1;
		}
		if (flagF == 0 || (sexo == "f" && cantidadPax > maximoPaxF)) {
			maximoPaxF = cantidadPax;
			flagF = 1;
		}





		respuesta = prompt("Desea continuar. si/no");
	} while (respuesta == "si");

	if (contSalta > contCataratas && contSalta > contBarilo) {
		lugarMelegido = "Salta";

	}
	else if (contBarilo > contCataratas && contBarilo > contSalta) {
		lugarMelegido = "Bariloche";
	}
	else {
		lugarMelegido = "Cataratas";
	}

	if (maximoPaxM > maximoPaxF) {
		sexoTitularMaxPax = "Masculino";
	}
	else if (maximoPaxF > maximoPaxM) {
		sexoTitularMaxPax = "Femenino";
	}

	promedioPaxInv = acuPax / contPax;

	document.write(`El lugar mas elegido es ${lugarMelegido} <br>`);
	document.write(`el sexo de titular que lleva mas pasajeros es ${sexoTitularMaxPax} <br>`);
	document.write(`el promedio de personas por viaje,  que viajan en invierno es ${promedioPaxInv}<br>`);


}
/*a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno*/
