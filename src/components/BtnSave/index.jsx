import { usePosts } from "../../contexts/PostsContext";

const BtnSave = ({onCancel, isDisabled, disable }) => {

    const { editPost } = usePosts(); // Função para editar post

    // Função para lidar com a edição do post
    const handleedit = (e) => {
        const card = e.currentTarget.closest('.card-post');
        const title = card.querySelector('h1').innerText;
        const section = e.currentTarget.closest('.cardOp.edit');
        const form = section.querySelector('form');
        const inputs = form.querySelectorAll('input, textarea');
        const editInfo = [...inputs].map(el =>el.value);

        editPost(title, editInfo); // Chama função para editar o post
        inputs.forEach((el) => el.value = '')  // Limpa os campos após a edição
        disable(); // Desabilita o botão de salvar
        onCancel(); // Chama a função de cancelamento
    }

    return (
        <button onClick={handleedit} className="btn btn-save" disabled={isDisabled}>Save</button>
    );
};

export default BtnSave;