import { useState } from 'react';
import { handleValidator } from '../../utils/formvalidator';
import ContainerBtns from '../ContainerBtns';

const FormPost = ({ children }) => {

    const handleValid = (e) => {
        const el = e.target;
        handleValidator(el);
    }

    return (
        <form 
            className='form-post'
            onSubmit={(e) => e.preventDefault()}
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