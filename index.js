
        // Ejercicio 1
        console.log("ejercicio 1")

const ParOImpar = (numero) => {
    if (Number(numero) == numero) {
      if (numero % 2 === 0) {
        console.log("El número es par");
      } else {
        console.log("El número es impar");
      }
    }
  };
  
  const numero = (0);
  ParOImpar(numero);
  
        // Ejercicio 2
        console.log("ejercicio 2")

  const MayorOMenor = (num1, num2) => {
    if (Number(num1) < Number(num2)) {
      console.log("El primer valor es menor");
    } else if (Number(num1) > Number(num2)) {
      console.log("El primer valor es mayor");
    } else {
      console.log("Ambos valores son iguales");
    }
  };
  
  MayorOMenor(0, 0);




        // Ejercicio 3
        console.log("ejercicio 3")

  const multiplo5 = (num1) => {
    if (Number(num1) % 5 === 0){
    console.log("es multiplo de 5");
  }
  else{
    console.log ("No es multiplo de 5")
  }
}
multiplo5 (0);


        // Ejercicio 4
        console.log("ejercicio 4")

const suma = (numero) =>{
let i = 0;
while(i <= numero){
    console.log(i);
    i++;
};
}
suma(0)


        // Ejercicio 5

        console.log("ejercicio 5")

const PalabraYNumero = (palabra, num) => {
for (let i = 0; i < num; i++) {
  console.log(palabra);
}
};

let num = 2;
let palabra ="fausto desojo";

PalabraYNumero(palabra, num);


        // Ejercicio 6

        console.log("ejercicio 6")
        
let palabra1 = "hola";
let numero1 = 4;
let animal = "perro";
let ciudad = "Buenos Aires";

const array = [palabra1, numero1, animal, ciudad];

console.log(array);
        

        // Ejercicio 7

        console.log("ejercicio 7")

        function imprimirArrayExceptoQuintaPosicion(numeros) {
          for (let i = 0; i < numeros.length; i++) {
            if (i !== 4) {
              console.log(numeros[i]);
            }
          }
        }
        
        const numeros = [1, 2, 3, 4, 25, 6, 7, 8, 9, 10];
        imprimirArrayExceptoQuintaPosicion(numeros);
        
        // Ejercicio 8

        console.log("ejercicio 8")

        const ArrayPormultiplicador = (array1, multiplicador) => {
          for (let i = 0; i < array1.length; i++) {
            let resultado = array1[i] * multiplicador;
            console.log(resultado);
          }
        }
        
        const array1 = [1, 2, 3, 4, 5];
        const multiplicador = 100;
        
        ArrayPormultiplicador(array1, multiplicador);
        