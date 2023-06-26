const determinarParidad = () => {
    const numero = prompt("Introduzca un número");
    if (Number(numero) == numero) {
      if (numero % 2 === 0) {
        console.log("El número es par");
      } else {
        console.log("El número es impar");
      }

  };
} 
  determinarParidad();
