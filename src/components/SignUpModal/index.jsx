import React, { useState } from "react";
import { handleValidator } from "../../utils/formvalidator";

const SignUpModal = () => {

    const [spanErro, setSpanErro] = useState(false);

    const handleValid = (e) => {
        const el = e.target;
        handleValidator(el);
        el.classList.contains('erro') ? setTimeout(() => setSpanErro(true), 520) : setSpanErro(false);
    };

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

                <button className="btn btn-enter" type="submit" disabled>enter</button>
            </form>
        </section>
    );
};

export default SignUpModal;