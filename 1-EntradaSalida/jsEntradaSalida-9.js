/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var numero1;
    var numero2;

    numero1 = document.getElementById ("sueldo").value;
    
    numero2 = parseInt (numero1) + (numero1) *10 /100;

    document.getElementById("resultado").value = numero2;
	
}
