import { userName } from "../../utils/userPost";
import "../../sass/components/_LoginNotification.scss";

const LoginNotification = () => {

    return (
        <div className="loginSucess">
            <span>Login realizado com sucesso. Bem-vindo(a), {userName}!</span>
        </div>
    )
}

export default LoginNotification;