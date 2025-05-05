import React, { useState } from "react";

const SignUpModal = () => {

    const [spanErro, setSpanErro] = useState(false);

    const showError = (input) => {
        input.classList.add('erro');
        setTimeout(() => {
            setSpanErro(true);
        }, 520)
    };

    const hiddenError = (input) => {
        input.classList.remove('erro');
        setSpanErro(false);
    };

    const handleValidator = () => {
        const nameInput = document.querySelector('#name');
        
        if (nameInput.value === '') {
            showError(nameInput);
        } else {
            hiddenError(nameInput);
        }
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
                    <input onInput={handleValidator} type="text" name="name" id="name" placeholder="John doe"/>
                    {spanErro && <span className="error">Please enter your name.</span>}
                </div>

                <button className="btn btn-enter" type="submit" disabled>enter</button>
            </form>
        </section>
    );
};

export default SignUpModal;