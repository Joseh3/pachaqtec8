// variables 
var n1,n2,vsuma;
	
	n1 = parseInt(prompt('Ingresar numero 1'));
	n2 = parseInt(prompt('Ingresar numero 2'));

	vsuma = n1 + n2;
	document.write('La suma es '+vsuma);
// 1.Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se
//deberá imprimir en pantalla

    let Number1=5;
    let Number2=10;
    vsuma=Number1+Number2;
//2.Un estudiante realiza 4 exámenes, calcular el promedio de estos
    let Number3=10;
    let Number4=10;
    let Number5=10;
    let Number6=10;
    vpromedio=Number3+Number4+Number5+Number6;

//3.Calcular el área de un rectángulo
    let base=5;
    let altura=3;
    let area;
    area = base * altura;

//4.Calcular el área de un triángulo
    let base2=12;
    let altura2=15;
    let area2;
    area2 = (base2 * altura2)/2;
//5.Calcular el área de una circunferencia
    let pi=3.1415;
    let radio=6;
    let area3=pi*Math.pow(radio,2);
//6.Determinar el sueldo semanal de un trabajador basándose en sus horas
//trabajadas y su salario de hora 
    let horastrabajadas=63;
    let salarioporhora=5;
    vsalario=salarioporhora*horastrabajadas;

//7.Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
    let metro=10;
    vpulgadas=metro / 0.0254;
//8.Una empresa importadora desea determinar cuántos dólares puede adquirir
    let dolarcompra=3.70;
    let dinero=100;
    vdolares=dolarcompra*dinero;

//9 Una empresa que contrata personal requiere determinar la edad de las
  
    let año_actual=2023;
    let año_nacimiento=1991;
    vedad=año_actual - año_nacimiento;

//10.Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la
//edad de la persona de menor edad
    let 
    edad5=10;
    edad6=20;
    edad7=27;
    edad8=34;
    
    if(edad5<=edad6 && edad5<=edad7 && edad5<=edad8){
    
    }else  if(edad6<=edad5 && edad6<=edad7 && edad6<=edad8) {
       
    }else  if(edad7<=edad5 && edad7<=edad6 && edad7<=edad8){

    }

    else{}
  
//11.Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un

   let antiguedad=4;
   let bono=0;
   vbono4=400;
  // if (antiguedad > 0){

 
   // elif (antiguedad == 1)
    //bono=100
   // elif (antiguedad == 1)
    //bono=100
    //elif (antiguedad == 2)
    //bono=200
    //elif (antiguedad == 3)
    //bono=300
    //elif (antiguedad == 4)
    //bono=400
    //elif (antiguedad == 5)
    //bono=500
//
  //  else
    //    bono=1000

  
  
  
  //13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el
///número de aprobados y reprobados
    let aprobados=0;
    let desaprobados=0;
    let nota1= 10;
    let nota2=14;
    let nota3=15;
    let nota4=17;
    let nota5=20;
    let promedio=(nota1+nota2+nota3+nota4+nota5)/5;
    let promRound = Math.round(promedio)
    if(nota1>=10)
    console.log("aprobados");
    else {
    console.log("desaprobados");
    }
    if (nota2>=10) 
    console.log("aprobados");
    else {
    console.log("desaprobados");
    }
    if (nota3>=10) 
    console.log("aprobados");
    else {
    console.log("desaprobados");
    }
    if (nota4>=10) 
    console.log("aprobados");
    else {
    console.log("desaprobados");
    }
    if (nota5>=10) 
    console.log("aprobados");
    else {
    console.log("desaprobados");
    }


  //15. Votar en las proximas elecciones
    let elecciones=0;
    let votar= 18;




    console.log("la suma es" +" "+ vsuma);
    console.log("el promedio es" +" "+ vpromedio/4);
    console.log("el área del cuadrado es"+" "+ area);
    console.log("el área del triángulo es"+" "+ area2 +"cm²");
    console.log("el área de una circuferencia es"+" "+ area3);
    console.log("Su sueldo semanal del trabajador es"+" "+ vsalario +" "+"Soles");
    console.log("Debe Pedir"+" "+ vpulgadas);
    console.log("Cantidad de dinero es"+" "+ vdolares+" "+"Soles") ;
    console.log("Su edad es"+" "+ vedad+" "+"Años") ;
    console.log("la edad menor es "+" "+ edad5+" "+"Años") ;
    console.log("el bono por antiguedad es "+" "+vbono4) ;
    console.log("Su nota es  "+" "+nota1+" " +"desaprobado") ;
    console.log("Usted puede votar en las elecciones  "+" "+nota1+" " +"desaprobado") ;
    