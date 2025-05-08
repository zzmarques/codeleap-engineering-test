import useDisabled from '../../hooks/useDeisabled';
import BtnCancel from '../BtnCancel';
import BtnSave from '../BtnSave';
import FormPost from '../formPost';

const Edit = ({ onClose }) => {
    const { isDisabled, enable, disable } = useDisabled();

    return (
        <section className='cardOp edit'>
            <h1>Edit item</h1>

            <FormPost enable={enable} disable={disable}>
                <BtnCancel onCancel={onClose}/>
                <BtnSave isDisabled={isDisabled} disable={disable}/>
            </FormPost>
        </section>
    );
};

export default Edit;