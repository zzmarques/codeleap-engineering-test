import { userName } from "../../utils/userPost";
import "../../sass/components/_LoginNotification.scss";
import { useEffect, useState } from "react";

const LoginNotification = ({ onLogin }) => {
    const [ ani, setAni] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAni(true);

            setTimeout(() => {
                onLogin();
            }, 800);

        }, 1500);
    }, [onLogin]);

    return (
        <div className={`loginSucess ${ani ? 'desat' : ''}`}>
            <h1>Login realizado com sucesso. Bem-vindo(a), <span> {userName}!</span></h1>
        </div>
    )
}

export default LoginNotification;