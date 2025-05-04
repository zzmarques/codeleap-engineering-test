import React from "react";

const SignUpModal = () => {
    return (
        <section className="SignUpModal">
            <h1>Welcome to CodeLeap network!</h1>

            <form 
                className="form-sing-up"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="form-group">
                    <label htmlFor="name">Please enter your username</label>
                    <input type="text" name="name" id="name" placeholder="John doe"/>
                </div>

                <button className="btn-enter" type="submit" disabled>enter</button>
            </form>
        </section>
    );
};

export default SignUpModal;