
interface Cuadrado{
    base:number;
    altura:number;
}

export const AreaCuadrado = () => {
    const area=(base:number, altura:number):number=>{
        return base*altura;
    }
  return (
    <div>
        <h3>Area de un cuadrado</h3>
        <span>El area es : {area(4,5)}</span>
        </div>
    
  )
}
