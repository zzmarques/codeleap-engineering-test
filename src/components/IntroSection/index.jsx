import "../../sass/components/_IntroSection.scss";

const IntroSection = ({ sendSing }) => {

    const handleSing = () => {
        sendSing(true);
    };

    return (
        <section className="intro-section">
            <h1>Hello, welcome!</h1>
            <button onClick={handleSing} className="btn btn-sing-up">Sign Up</button>
        </section>
    );
};

export default IntroSection;