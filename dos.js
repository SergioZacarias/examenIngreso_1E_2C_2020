/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let marca;
  let precio;
  let peso;
  let tipo;
  let acuPeso = 0;
  let flagmarcaLM = 0;
  let precioMasCaroLiquido = 0;
  let flagMasbaratoSol = 0;
  let respuesta = "si";
  let precioBaratoSol = 0;
  let nombreLiquidoCaro;
  let nombresolbarato;


  do {
    do {
      marca = prompt("Ingrese la marca.");
    } while (!(isNaN(marca)));
    do {
      precio = parseInt(prompt("Ingrese precio."));
    } while (isNaN(precio));
    do {
      peso = parseInt(prompt("Ingrese peso."));
    } while (isNaN(peso));
    do {
      tipo = prompt("Ingrese tipo: solido o liquido")
    } while (!(tipo == "solido" || tipo == "liquido"));

    if (flagmarcaLM == 0 || (tipo == "liquido" && precio > precioMasCaroLiquido)) {
      precioMasCaroLiquido = precio;
      nombreLiquidoCaro = marca;
      flagmarcaLM = 1;
    }
    if (flagMasbaratoSol == 0 || tipo == "solido" && precio < precioBaratoSol) {
      precioBaratoSol = precio;
      nombresolbarato = marca;
      flagMasbaratoSol = 1;

    }

    acuPeso = acuPeso + peso;





    respuesta = prompt("Desea continuar. si/no");

  } while (respuesta == "si");




  document.write(`El peso total de la compra es $ ${acuPeso} <br>`);
  document.write(`La marca del mas caro de los liquidos es ${nombreLiquidoCaro}<br>`);
  document.write(`la marca del más barato de los sólido es ${nombresolbarato}`);





}
