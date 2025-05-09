import { useEffect, useState } from "react";
import { userName } from "../../utils/userPost";
import "../../sass/components/_LoginNotification.scss";

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
            <h1>Login successful. Welcome, <span> {userName}!</span></h1>
        </div>
    )
}

export default LoginNotification;