import { userName, userPost } from '../../utils/userPost';
import { usePosts } from '../../contexts/PostsContext';

const BtnCreate = ({ isDisabled, disable }) => {
    const { updatePost } = usePosts();  // Função para atualizar post

    // Função para criar um novo post
    const handleCreate = () => {
        const form = document.querySelector('form');
        const title = form.querySelector('input');
        const text = form.querySelector('textarea');
        
        const newPost = new userPost(userName,title.value, text.value); // Cria novo post
        updatePost(newPost); // Atualiza lista de posts com o novo post
        title.value = ''; // Limpa o campo de título
        text.value = ''; // Limpa o campo de texto
        disable(); // Desabilita o botão de criar
    }

    return (
        <button onClick={handleCreate} className='btn btn-create' type='submit' disabled={isDisabled}>Create</button>
    )
}

export default BtnCreate;