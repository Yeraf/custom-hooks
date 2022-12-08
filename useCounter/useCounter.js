import { useState } from "react";

export const useCounter3 = (valorinicial = 10) => {

    const [counter, setcounter] = useState(valorinicial);

    const suma = () => {
        setcounter (counter + 1);
    }

    const resta = () => {
        setcounter(counter - 1);
    }

    const reset = () => {
        setcounter (valorinicial)
    }

  return {

    counter,
    suma, 
    resta,
    reset

  }
}

