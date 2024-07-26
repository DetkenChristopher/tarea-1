import React from 'react'
const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
export const ArregloDivision = () => {
    const dividirArreglo = (arreglo: number[]): number[] => {
        return arreglo.map(valor => valor / 5);
    }
  return (
    <div>
        <h3>
            Division
        </h3>
        const nuevoArreglo: number[] = dividirArreglo(arreglo);
console.log(nuevoArreglo);
    </div>
  )
}
