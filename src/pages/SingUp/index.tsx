import React, { useEffect, useState } from "react";
import SignUpModal from "../../components/SignUpModal";
import IntroSection from "../../components/IntroSection";


const SingUp = () => {

    const [ sing, setSing ] = useState(false);

    const getSing = (dado) => {
        setSing(dado);
    };
    
    return (
        <main className="sing-up">
            {
                sing ? <SignUpModal/> : <IntroSection sendSing={getSing}/>
            }            
        </main>
    );
};

export default SingUp;