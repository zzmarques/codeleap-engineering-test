
import React from 'react'
import { userName, userPost } from '../../utils/userPost';
import { usePosts } from '../../contexts/PostsContext';

const BtnCreate = ({ isDisabled, disable }) => {
    const { updatePost } = usePosts();

    const handleCreate = () => {
        const form = document.querySelector('form');
        const title = form.querySelector('input');
        const text = form.querySelector('textarea');
        
        const newPost = new userPost(userName,title.value, text.value);
        updatePost(newPost);
        title.value = '';
        text.value = '';
        disable()
    }

    return (
        <button onClick={handleCreate} className='btn btn-create' type='submit' disabled={isDisabled}>Create</button>
    )
}

export default BtnCreate;