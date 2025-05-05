import BtnCancel from '../BtnCancel';
import BtnSave from '../BtnSave';
import FormPost from '../formPost';

const Edit = () => {
    return (
        <section className='edit'>
            <h1>Edit item</h1>

            <FormPost>
                <BtnCancel/>
                <BtnSave/>
            </FormPost>
        </section>
    );
};

export default Edit;