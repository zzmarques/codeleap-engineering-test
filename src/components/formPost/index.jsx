import { editValidator, handleValidator } from '../../utils/formvalidator';
import ContainerBtns from '../ContainerBtns';
import "../../sass/components/_FormPost.scss";

const FormPost = ({ children, enable, disable, isEdit = false }) => {
    
    // Função para validar campos com base no modo (edição ou criação)
    const handleValid = (e) => {
        const el = e.target;
        if (isEdit) {
            editValidator(el, disable, enable);
        } else {
            handleValidator(el, disable, enable);
        }
    }

    return (
        <form 
            className='form-post'
            onSubmit={(e) => e.preventDefault()}
            autocomplete="off"
        >
            <div className='form-group'>
                <label htmlFor="title">Title</label>
                <input onInput={handleValid} type="text" name="title" id="title" placeholder='Hello world'/>
            </div>

            <div className='form-group'>
                <label htmlFor="content">Content</label>
                <textarea onInput={handleValid} name="form-post" id="content" placeholder='Content here'></textarea>
            </div>

            <ContainerBtns>
                { children }
            </ContainerBtns>
        </form>
    );
};

export default FormPost;