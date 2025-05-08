import { useState } from "react";
import SignUpModal from "../../components/SignUpModal";
import IntroSection from "../../components/IntroSection";
import "../../sass/pages/_SingUp.scss"


const SingUp = ({ success }) => {

    const [ sing, setSing ] = useState(false);

    const getSing = (dado) => {
        setSing(dado);
    };

    const getState = (state) => {
        success(state)
    }
    
    return (
        <main className="sing-up">
            {
                sing ? <SignUpModal sendState={getState}/> : <IntroSection sendSing={getSing}/>
            }            
        </main>
    );
};

export default SingUp;