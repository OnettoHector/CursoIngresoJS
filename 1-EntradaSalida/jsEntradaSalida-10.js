/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numero1
    var numero2
    var numero3 



    numero1 = document.getElementById ("importe").value;
    numero2 = parseInt (numero1) - (numero1) /100 *25;



    document.getElementById("resultado").value = numero2;
    



	
}
