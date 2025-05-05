import BtnCancel from '../BtnCancel';
import BtnDelete from '../BtnDelete';
import ContainerBtns from '../ContainerBtns';

const Delete = () => {
    return (
        <section className="delete">
            <h1>Are you sure you want to delete this item?</h1>
            <ContainerBtns>
                <BtnCancel/>
                <BtnDelete/>
            </ContainerBtns>
        </section>
    );
};

export default Delete;