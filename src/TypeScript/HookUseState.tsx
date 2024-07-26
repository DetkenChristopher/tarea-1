
import React, { useState } from 'react'
export const HookUseState = () => {

    const [valorContador, setvalorContador] = useState<number>(5);



    const cambiarContador=(numero:number)=>{
        setvalorContador(valorContador+numero);
    }
  return (
    <div className='Contador-cuadro'><h3>Contador:<small>{valorContador}</small></h3>
    <button className="btn-primary" onClick={()=>cambiarContador(5)} color="error">+5</button>
    &nbsp;
    <button className="btn-primary" onClick={()=>cambiarContador(-5)}>-5</button>
    </div>

  )
}