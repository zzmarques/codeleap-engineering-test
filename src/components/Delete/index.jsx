import BtnCancel from '../BtnCancel';
import BtnDelete from '../BtnDelete';
import BackDrop from '../BackDrop';
import ContainerBtns from '../ContainerBtns';

const Delete = ({ onClose }) => {

    return (
        <>
            <BackDrop/>
            <section className="cardOp delete">
                <h1>Are you sure you want to delete this item?</h1>
                <ContainerBtns>
                    <BtnCancel onCancel={onClose}/>
                    <BtnDelete onCancel={onClose}/>
                </ContainerBtns>
                
            </section>
        </>
    );
};

export default Delete;