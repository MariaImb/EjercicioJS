
//Declaramos variables 

var numero1;
var numero2;
var numero3;


function iniciar() {

    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;   
    let numero3 = document.getElementById("numero3").value;

    numero1 = parseFloat(numero1);   
    numero2 = parseFloat(numero2);   
    numero3 = parseFloat(numero3);

    //numero1 = prompt("Ingrese un primer numero: ");
    // numero2 = prompt("Ingrese un segundo numero: ");
    // numero3 = prompt("Ingrese un tercer numero: ");

    //para determinar el valor mayor
    if(numero1 > numero2 && numero1 > numero3){
         console.log((numero1) + " es el mayor valor")}
    else if(numero2 > numero1 && numero2 > numero3){
        console.log((numero2) + " es el mayor valor")}
    else {
        console.log((numero3) + " es el mayor valor")}


    //para determinar el valor menor
    if(numero1 < numero2 && numero1 < numero3){
        console.log((numero1) + " es el menor valor")}
    else if(numero2 < numero1 && numero2 < numero3){
        console.log((numero2) + " es el menor valor")}
    else {
        console.log((numero3) + " es el menor valor")}
    
}

