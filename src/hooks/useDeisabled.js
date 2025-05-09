// Hook de estado para controle de habilitação/desabilitação
import { useState } from "react";

// Função para criar hook de controle de estado desabilitado
const useDisabled = (initialState = true) => {
    const [isDisabled, setIsDisabled] = useState(initialState);

    const enable = () => setIsDisabled(false);
    const disable = () => setIsDisabled(true);

    return { isDisabled, enable, disable };
};

export default useDisabled;
