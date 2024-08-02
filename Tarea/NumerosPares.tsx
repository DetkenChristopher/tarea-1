
import { Text, View } from 'react-native';
import React,{useState} from 'react';


export const NumerosPares = () => {
    const [numeros, setnum] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [numerospares, setpar] = useState([]);
    const [numerosimpares, setimpar] = useState([]);
  const numerosseparar=()=>{
    const numpar=numeros.filter(num=>num % 2===0);
    const numimpar=numeros.filter(num=>num % 2!==0);
setpar(numpar);
setimpar(numimpar);
  }

  React.useEffect(()=>{
    numerosseparar();
  })
  return (
    <View>
        <Text>
            <h3><small>{numerosimpares}</small><small>{numerospares}</small></h3>
Vector:1,2,3,4,5,6,7,8,9,10
        </Text>

        <button className="btn btn-primary" onClick={()=>numerosseparar}>Separar</button>
        <View>

        </View>
    </View>
  )
}

