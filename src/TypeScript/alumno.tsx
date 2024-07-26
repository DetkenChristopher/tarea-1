interface Colegio{
name:string;
edad:number;
calificacion:number;

}

const alumnos:Colegio[] = [
    {
        name:'Viviana',
        edad: 19,
        calificacion: 10,
    },
    {
        name:' Wendy',
        edad: 20,
        calificacion: 8,
    },
    {
        name: 'Gerson',
        edad: 18,
        calificacion: 9,
    }
];

const calcularProm=(alumnos:Colegio[]):number=>{
    const totalCalif=alumnos.reduce((suma,alumno)=>suma + alumno.calificacion,0);
    return totalCalif / alumnos.length;
}
export const alumno = () => {
const promedio=calcularProm(alumnos);


  return (
    <div>
        <h3>alumno</h3>
    
    console.log(`EL PROMEDIO DE CALIFICACIONES ES: ${promedio}`);
    
    
    
    </div>
  )
}
