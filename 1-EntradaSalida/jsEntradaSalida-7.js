/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1;
    var numero2;
    var numero3;
    
    
    numero1 = document.getElementById ("numeroUno").value;
    numero2 = document.getElementById ("numeroDos").value;
    numero3 = parseInt (numero1) + parseInt (numero2);


    alert ("La suma es " + numero3);
}

function restar()
{
    var numero1;
    var numero2;
    var numero3;


    numero1 = document.getElementById ("numeroUno").value;
    numero2 = document.getElementById ("numeroDos").value;
    numero3 = parseInt (numero1) - parseInt (numero2);


    alert ("La resta es " + numero3);
}

function multiplicar()
{ 
    var numero1;
    var numero2;
    var numero3;


    numero1 = document.getElementById ("numeroUno").value;
    numero2 = document.getElementById ("numeroDos").value;
    numero3 = parseInt (numero1) * parseInt (numero2);


    alert ("La multiplicación es " + numero3)    	
}

function dividir()
{
    var numero1;
    var numero2;
    var numero3;


    numero1 = document.getElementById ("numeroUno").value;
    numero2 = document.getElementById ("numeroDos").value;
    numero3 = parseInt (numero1) / parseInt (numero2);

    alert ("La división es " + numero3);
}

