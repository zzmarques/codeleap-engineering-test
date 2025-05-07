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

export let user;

export const setUser = (nameUser) => {
    user = nameUser;
}


