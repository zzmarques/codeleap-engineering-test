// Contexto para gerenciar posts e usuários
import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);

    // Função para adicionar novo post
    const updatePost = (postData) => {
        const post = {
            name: postData.name,
            title: postData.title,
            text: postData.text,
            createdAt: Date.now()  // Marca o horário da criação
        };

        setPost(prevPosts => [...prevPosts, post]); // Adiciona ao array de posts
        setUser(prevUser => [...prevUser, postData]); // Adiciona ao array de usuários
    };   

    // Função para deletar post pelo título
    const deletePost = (title) => {
        setPost((prevPosts) => prevPosts.filter((p) => p.title !== title));
        setUser((prevUsers) => prevUsers.filter((u) => u.title !== title));
    }

    // Função para editar título e texto de um post
    const editPost = (title, infoEdit) => {
        const [editTitle, editText] = infoEdit;

        setPost(prevPosts =>
            prevPosts.map(p =>
                p.title === title 
                ? {
                    ...p,
                    title: editTitle.trim() !== '' ? editTitle : p.title,
                    text: editText.trim() !== '' ? editText : p.text
                } : p
            )
        );

        setUser(prevUsers =>
            prevUsers.map(u =>
                u.title === title 
                ? {
                    ...u,
                    title: editTitle.trim() !== '' ? editTitle : u.title,
                    text: editText.trim() !== '' ? editText : u.text
                } : u
            )
        );
    }

    return (
        <PostContext.Provider value={{ post, user, updatePost, deletePost, editPost }}>
        {children}
        </PostContext.Provider>
    );
}