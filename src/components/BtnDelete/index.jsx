import { usePosts } from "../../contexts/PostsContext";

const BtnDelete = () => {
    const { deletePost } = usePosts();
    
    const handleDelete = (e) => {
        const card = e.currentTarget.closest('.card-post');   
        const title = card.querySelector('h1').innerText;
        deletePost(title)
    }

    return (
        <button onClick={handleDelete} className="btn btn-dele">Delete</button>
    );
};

export default BtnDelete;