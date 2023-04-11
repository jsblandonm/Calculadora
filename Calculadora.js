class Calculadora {
    suma(num1, num2){
        return num1 + num2;
    }
    restar(num1, num2){
        return num1 - num2;
    }
    multiplicacion(num1, num2){
        return num1 * num2;
    }
    dividir(num1, num2){
        if (num2 == 0 ) {
            return 'no se puede'
        }
        return num1 / num2;
    }
    porcentaje(num1, num2){
        if (num2 < num1) {
            return(num1 * num2)/100
        }else{
            return  (num1 * num2)/100
        }
    }

}


