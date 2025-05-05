import React from "react";

const IntroSection = ({ sendSing }) => {

    const handleSing = () => {
        sendSing(true);
    };

    return (
        <section className="intro-section">
            <h1>Olá, seja bem-vindo(a)!</h1>
            <button onClick={handleSing} className="btn btn-sing-up">Sign Up</button>
        </section>
    );
};

export default IntroSection;