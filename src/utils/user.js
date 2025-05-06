

class User {

    constructor(name) {
        this.name = name;
    }

    del() {
        console.log('Deletado');
    }

    edit() {
        console.log('Editado');
        
    }
}

class Post extends User {

    constructor(name, title, text) {
        super(name);
        this.title = title;
        this.text = text;
    }
}

const newUser = new User('sla');

export const setUser = (nameUser) => {
    const newUser = new User(nameUser);
    console.log(newUser);
    
};




