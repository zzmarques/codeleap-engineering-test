import BtnCancel from '../BtnCancel';
import BtnSave from '../BtnSave';
import FormPost from '../formPost';

const Edit = ({ onClose }) => {
    return (
        <section className='cardOp edit'>
            <h1>Edit item</h1>

            <FormPost>
                <BtnCancel onCancel={onClose}/>
                <BtnSave/>
            </FormPost>
        </section>
    );
};

export default Edit;