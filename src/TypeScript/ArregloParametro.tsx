import React from 'react'
function sumarElementos(arreglo: number[]): number {
    return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}


const miArreglo: number[] = [45, 23, 42, 25, 25];
const resultado: number = sumarElementos(miArreglo);

export const ArregloParametro = () => {
  return (
    <div><h3>ArregloParametro </h3>
    console.log(`La suma de los elementos del arreglo es: ${resultado}`);</div>
  
  )
}
