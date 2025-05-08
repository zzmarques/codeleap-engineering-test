import { useState } from "react";

const useDisabled = (initialState = true) => {
    const [isDisabled, setIsDisabled] = useState(initialState);

    const enable = () => setIsDisabled(false);
    const disable = () => setIsDisabled(true);

    return { isDisabled, enable, disable };
};

export default useDisabled;
