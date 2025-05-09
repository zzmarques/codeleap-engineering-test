import { usePosts } from "../../contexts/PostsContext";

const BtnDelete = ({ onCancel }) => {
    const { deletePost } = usePosts(); // Função para deletar post
    
    // Função para lidar com a exclusão do post
    const handleDelete = (e) => {
        const card = e.currentTarget.closest('.card-post');   
        const title = card.querySelector('h1').innerText;

        deletePost(title);// Chama função para deletar o post
        onCancel(); // Chama a função de cancelamento
    }

    return (
        <button onClick={handleDelete} className="btn btn-dele">Delete</button>
    );
};

export default BtnDelete;