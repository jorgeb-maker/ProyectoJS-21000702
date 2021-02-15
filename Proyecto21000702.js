//Edad 18 = 0.10
//Edad 25 = 0.20
//Edad 50 = 0.30

//Casado 18 = 0.10
//Casado 25 = 0.20
//Casado 50 = 0.30

//Recargo por hijo = 0.2

//Alerta ingreso de datos

//Recargo propiedad 35% por c/u

//Recargo por monto salarial

//2000 - 3500 = 5
//3500 - 5000 = 10
//5000 > = 15






var precio_base = 2000
var nombre = prompt("Ingrese su nombre")
var edad = prompt ("Ingrese su edad")
var edad_valor = parseInt(edad)
var sueldo = prompt("Ingrese su sueldo")
var sueldo_valor = parseInt(sueldo)
var estado_civil =  prompt("Es usted casado")
var conyuge
if(estado_civil == "si"){
  conyuge = prompt("Ingrese la edad de su conyuge")
}
var conyuge_edad = parseInt(conyuge)
var hijos = prompt("Tiene hijos", "Indique cuantos tienes")
var hijos_cantidad = parseInt(hijos)
var propiedad = prompt("Tiene propiedades a su nombre","Indique cuantas")
var propiedad_valor =  parseInt(propiedad)

//Calculo individual
var costo_individual
if(edad_valor>=18 && edad_valor<25){
  costo_individual = precio_base * 0.1
} else if(edad_valor>=25 && edad_valor<50){
  costo_individual = precio_base * 0.2
} else if(edad_valor>50){
  costo_individual = precio_base * 0.3
}

//Calculo conyuge
var costo_conyuge
if(conyuge_edad>=18 && conyuge_edad<25){
  costo_conyuge = precio_base * 0.1
} else if(conyuge_edad>=25 && conyuge_edad<50){
  costo_conyuge = precio_base * 0.2
} else if(conyuge_edad>50){
  costo_conyuge = precio_base * 0.3
}
  

//Calculo hijos
var costo_hijos = hijos_cantidad * 0.2 * precio_base

//Calculo propiedad
var costo_propiedad = propiedad_valor * 0.35 * precio_base

//Calculo sueldo
var costo_sueldo = sueldo_valor * 0.05

var total_individual = costo_individual + costo_propiedad + costo_sueldo
var total_costo = costo_individual + costo_conyuge + costo_hijos + costo_propiedad + costo_sueldo
var total_apagar = total_costo + precio_base
var total_apagar_individual = total_individual + precio_base

if(estado_civil == "si"){
alert ("Solicitante:"+nombre)
alert ("Total recargos:"+total_costo)
alert ("Total cotizacion:"+total_apagar)
} else if(estado_civil == "no"){
alert ("Solicitante:"+nombre)
alert ("Total recargos:"+total_individual)
alert ("Total cotizacion:"+total_apagar_individual)
}




