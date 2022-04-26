import React, { useEffect, useState } from 'react'

const Lifecycle = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    
/*     useEffect(() => {        
        //Se ejecuta en cada cambio del componente
        console.log("useEffect no dependency")        
    }) */

/*     useEffect(() => {        
        //Se ejecuta en la primera carga del componente
        console.log("useEffect -> []") 
    },[]) */

/*     useEffect(() => {        
        //Se ejecuta en la primera carga del componente y adicionalmente cada vez que incrementemos counter1
        console.log("useEffect -> [counter1]") 
    },[counter1]) */

    /* 
    useEffect(() => {        
        //Se ejecuta en la primera carga del componente y adicionalmente cada vez que incrementemos counter1
        console.log("useEffect -> [counter2]") 
    },[counter2]) */

    useEffect(() => {
        console.log("Mounted")

        //Se ejecuta en la primera carga del componente y adicionalmente cuando cambie counter1 o counter2
        console.log("useEffect -> [counter1, counter2]") 

        return () => {
            console.log("Unmounted"); //Siempre limpia primero y luego monta el componente

        }
    },[counter1, counter2])

  return (
    <>
        <h3>Hola!!</h3>
        <div>
            <h3>Counter 1: {counter1}</h3>
            <h3>Counter 2: {counter2}</h3>

            <button onClick={() => setCounter1(counter1+1)} style={{ marginRight:"30px" }}>Counter 1 ++</button>
            <button onClick={() => setCounter2(counter2+1)}>Counter 2 ++</button>  
        </div>
    </>
  )
}

export default Lifecycle