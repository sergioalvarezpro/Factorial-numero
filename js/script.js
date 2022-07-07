//paseInt convierta un argumento de tipo cadena y devuelve un entero.
let factorial = parseInt(prompt('¿De que número quieres conocer el factorial?'));

//La función Math.abs() retorna el valor absoluto de un número.
const ENTERO_POSITIVO = Math.abs(factorial);
let resultado = 1;

function factorialNumero(pENTERO_POSITIVO) {

    //En el caso que el usuario no introduzca los valores númericos solicitados o incluso introduzca cualquier otro carácter, se mostrará el siguiente mensaje:
    if (isNaN(pENTERO_POSITIVO)) {
        document.write(`<p style= "color: white; background-color: red;">Introduce números, ¡ no me valen las letras ni los signos raros !</p>`);
    }
    //En el caso que el usuario introduzca valor númerico, se procede a sacar el factorial del número solicitado.
    else {
        //La variable i se inicia a 1, ya que el factorial de 0! es 1.
        for (let i = 1; i <= pENTERO_POSITIVO; i++) {
            resultado = resultado * i;
        }

        document.write(`<p> El factorial de ${pENTERO_POSITIVO} es ${resultado} </p>`);
    }
}

factorialNumero(ENTERO_POSITIVO);