import React, { useState } from "react";
import { handleValidator } from "../../utils/formvalidator";
import { setUser } from "../../utils/userPost";



const SignUpModal = ({ sendState }) => {

    const [spanErro, setSpanErro] = useState(false);

    const handleValid = (e) => {
        const el = e.target;
        handleValidator(el);
        el.classList.contains('erro') ? setTimeout(() => setSpanErro(true), 520) : setSpanErro(false);
    }

    const handleUser = () => {
        const nameUser = document.querySelector('#name').value;
        setUser(nameUser);
        setTimeout(() => {
            sendState(true);
        }, 2000);
    }

    return (
        <section className="SignUpModal">
            <h1>Welcome to CodeLeap network!</h1>

            <form 
                className="form-sing-up"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="form-group">
                    <label htmlFor="name">Please enter your username</label>
                    <input onInput={handleValid} type="text" name="name" id="name" placeholder="John doe"/>
                    {spanErro && <span className="error">Please enter your name.</span>}
                </div>

                <button onClick={handleUser} className="btn btn-enter" type="submit" >enter</button>
            </form>
        </section>
    );
};

export default SignUpModal;