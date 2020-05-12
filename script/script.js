// Ejemplo 1
/*if (x>y) {
    document.writeln("El mayor es: "+x);
    document.writeln("El menor es: "+y);    
}  else {
    document.writeln("El mayor es: "+y);    
    document.writeln("El menor es: "+x);
*/  

//Ejemplo 2
var x = Number(prompt("Ingresar numero 1: "));
var y = Number(prompt("Ingresar numero 2: "));

var opcion = Number(prompt("Ingrese la opción"));

switch (opcion) {
    case 1:
        document.write("La suma de los numeros es: "+ suma(x,y));
        break;
    case 2:
        document.write("La resta de los dos numeros es: " + resta(x,y));
        break;    
    case 3:
        document.write("El resultado de la multiplicación de los dos numeros es: " + multiplicación(x,y));
        break;
    case 4:
        document.write("El resultado de la división entre los dos numeros es: " + division(x,y));
        break;
    case 5:
        document.write("La raiz del primer numero es: " + raiz(x));
        document.write("La raiz del segundo numero es " + raiz(y));
        break;
    case 6:
        document.write("El factorial del primer numero es: " + Factorial(x));
        document.write("La factorial del segundo numero es " + Factorial(y));
        break;
    case 7:
        document.write("El resultado de elevar el primer numero al segundo es: " + potencia(x,y));
        break;
    default:
        break;
}       

    function suma(x) {
        return x;
    }
    function resta(a,b){
        return a-b;
    }
    function multiplicación(a,b) {
        return a*b;
    }
    function division(a,b) {
        return a/b;
    }
    function raiz(a) {
        return Math.sqrt(a); 
    }
    function Factorial(a) {
        var i;
        var res = 1;
        for (i = 1; i <= a; i++) {
            res = res*i;
            }
        return res;
        }
    function potencia(a,b){
        return Math.pow(x,y);
    }
