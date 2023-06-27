
        // Ejercicio 1

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
const suma = (numero) =>{
let i = 0;
while(i <= numero){
    console.log(i);
    i++;
};
}
suma(0)


        // Ejercicio 5

const PalabraYNumero = (palabra, num) => {
for (let i = 0; i < num; i++) {
  console.log(palabra);
}
};
 
let num = 2;
let palabra ="fausto desojo";

 PalabraYNumero(palabra, num);


        // Ejercicio 6

        
let palabra1 = "hola";
let numero1 = 4;
let animal = "perro";
let ciudad = "Buenos Aires";

const array = [palabra1, numero1, animal, ciudad];

console.log(array);
        

        // Ejercicio 7

        function imprimirArrayExceptoQuintaPosicion(array) {
            for (let i = 0; i < array.length; i++) {
              if (i !== 4) {
                console.log(array[i]);
              }
            }
          }
          
          const numeros = [1, 2, 3, 4, 25, 6, 7, 8, 9, 10];
          imprimirArrayExceptoQuintaPosicion(numeros);
        