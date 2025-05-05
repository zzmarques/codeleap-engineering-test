import ContainerBtns from '../ContainerBtns';

const FormPost = ({ children }) => {
    return (
        <form className='form-post'>
            <div className='form-group'>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" placeholder='Hello world'/>
            </div>

            <div className='form-group'>
                <label htmlFor="content">Content</label>
                <textarea name="" id="" placeholder='Content here'></textarea>
            </div>

            <ContainerBtns>
                { children }
            </ContainerBtns>
        </form>
    );
};

export default FormPost;