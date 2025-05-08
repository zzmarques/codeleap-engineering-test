import BtnCancel from '../BtnCancel';
import BtnDelete from '../BtnDelete';
import ContainerBtns from '../ContainerBtns';

const Delete = ({ onClose }) => {

    return (
        <section className="cardOp delete">
            <h1>Are you sure you want to delete this item?</h1>
            <ContainerBtns>
                <BtnCancel onCancel={onClose}/>
                <BtnDelete/>
            </ContainerBtns>
        </section>
    );
};

export default Delete;