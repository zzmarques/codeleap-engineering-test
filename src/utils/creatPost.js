import { getUser } from "./user";


export const creatPost = () => {
    const form = document.querySelector('form');
    const title = form.querySelector('input').value;
    const text = form.querySelector('textarea').value;
    
    const user = getUser();
    user.createPost(title, text);
}