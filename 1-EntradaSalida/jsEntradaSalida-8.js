/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var dividendo;
    var divisor;
    var numero1;

    dividendo = document.getElementById ("numeroDividendo").value;
    divisor = document.getElementById ("numeroDivisor").value;
    numero1 = parseInt (dividendo) % parseInt (divisor);
    
    alert  ("el resto es " + numero1);
}
