import { useState } from "react";

const Counter = () => {
    const estadoInicial = 0;
    let [contador, setContador] = useState(estadoInicial);

    
    const handleSuma = () =>{
        return setContador(contador ++);
    }

    const handleResta = () =>{
        return setContador(contador --);
    }

    console.log(contador);
    const handleReset = () => {
        return setContador(estadoInicial)
    }

    return (
        <div>
            <h1>CONTADOR</h1>
            <hr />
            <button onClick={handleSuma}> + </button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleResta}> - </button>
            <p>Resultado = {contador}</p>
        </div>
    )
}

export default Counter