export class userPost {

    constructor(name, title, text) {
        this.name = name
        this.title = title;
        this.text = text;
    }
}

export let userName;

export const setUser = (nameUser) => {
    userName = nameUser;
}


