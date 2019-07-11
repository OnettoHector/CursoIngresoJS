/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    var numeroUno;
    var numeroDos;
    var numeroTres; 


    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    numeroTres = parseInt (numeroUno) + parseInt (numeroDos);


    alert ("la suma es " + numeroTres);
    

}
