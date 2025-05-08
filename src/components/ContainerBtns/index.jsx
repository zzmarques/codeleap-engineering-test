import "../../sass/components/_ContainerBtns.scss";

const ContainerBtns = ({ children }) => {
    return (
        <div className="conatiner-btns">
            { children }
        </div>
    );
};

export default ContainerBtns