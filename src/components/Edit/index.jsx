import useDisabled from '../../hooks/useDeisabled';
import BtnCancel from '../BtnCancel';
import BtnSave from '../BtnSave';
import BackDrop from '../BackDrop';
import FormPost from '../formPost';
import "../../sass/components/_Edit.scss";


const Edit = ({ onClose }) => {
    const { isDisabled, enable, disable } = useDisabled();

    return (
        <>
            <BackDrop/>
            <section className='cardOp edit'>
                <h1>Edit item</h1>

                <FormPost enable={enable} disable={disable} isEdit={true}>
                    <BtnCancel onCancel={onClose}/>
                    <BtnSave onCancel={onClose} isDisabled={isDisabled} disable={disable}/>
                </FormPost>
            </section>
        </>
    );
};

export default Edit;