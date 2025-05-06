import { GiEyeTarget } from "react-icons/gi";

class User {

    constructor(name) {
        this.name = name;
        this.posts = [];
    }

    createPost(title, text) {
        const novoPost = new Post(title, text);
        this.posts.push(novoPost);
        return novoPost;
    }
}

export class Post extends User {

    constructor(title, text) {
        super(name);
        this.title = title;
        this.text = text;
    }

    del() {
        console.log('Deletado');
    }

    edit() {
        console.log('Editado');
    }

    show() {
        console.log(this.name);
        console.log(this.title);
        console.log(this.text);
    }
}


let newUser = null;

export const setUser = (nameUser) => {
    newUser = new User(nameUser);
};

export const getUser = () => newUser;

console.log(getUser());




