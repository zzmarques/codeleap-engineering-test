// Classe para representar uma postagem de usuário

export class userPost {

    constructor(name, title, text) {
        this.name = name
        this.title = title;
        this.text = text;
    }
}

// Variável para armazenar o nome do usuário atual
export let userName;

// Função para definir o nome do usuário
export const setUser = (nameUser) => {
    userName = nameUser;
}


