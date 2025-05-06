export class userPost {

    constructor(name, title, text) {
        this.name = name
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

let user;
export let postsArr = [];

export const setUser = (nameUser) => {
    user = nameUser;
}

export const creatPost = () => {
    const form = document.querySelector('form');
    const title = form.querySelector('input').value;
    const text = form.querySelector('textarea').value;

    const newPost = new userPost(user,title, text);

    postsArr.push({
        name: newPost.name,
        title: newPost.title,
        text: newPost.text
    });

    const novosDados = [...postsArr];

    postsArr = novosDados;
}



