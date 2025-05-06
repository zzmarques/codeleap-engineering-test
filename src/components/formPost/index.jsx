import ContainerBtns from '../ContainerBtns';

const FormPost = ({ children }) => {
    return (
        <form 
            className='form-post'
            onSubmit={(e) => e.preventDefault()}
        >
            <div className='form-group'>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" placeholder='Hello world'/>
            </div>

            <div className='form-group'>
                <label htmlFor="content">Content</label>
                <textarea name="form-post" id="content" placeholder='Content here'></textarea>
            </div>

            <ContainerBtns>
                { children }
            </ContainerBtns>
        </form>
    );
};

export default FormPost;