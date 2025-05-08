import { usePosts } from "../../contexts/PostsContext";

const BtnSave = () => {

    const { editPost } = usePosts()

    const handleedit = (e) => {
        const card = e.currentTarget.closest('.card-post');
        const title = card.querySelector('h1').innerText;
        const section = e.currentTarget.closest('.cardOp.edit');
        const form = section.querySelector('form');
        const inputs = form.querySelectorAll('input, textarea');
        
        const editInfo = [...inputs].map(el =>el.value);

        editPost(title, editInfo);
    }

    return (
        <button onClick={handleedit} className="btn btn-save">Save</button>
    );
};

export default BtnSave;