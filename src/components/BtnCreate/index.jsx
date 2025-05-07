
import React from 'react'
import { userName, userPost } from '../../utils/userPost';
import { usePosts } from '../../contexts/PostsContext';

const BtnCreate = () => {
    const { updatePost } = usePosts();

    const handleCreate = () => {
        const form = document.querySelector('form');
        const title = form.querySelector('input').value;
        const text = form.querySelector('textarea').value;
        
        const newPost = new userPost(userName,title, text);
        updatePost(newPost);
    }

    return (
        <button onClick={handleCreate} className='btn btn-create' type='submit'>Create</button>
    )
}

export default BtnCreate;