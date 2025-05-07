import { createContext, useContext, useState } from "react";


const PostContext = createContext();

export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);

    const updatePost = (postData) => {
        const post = {
            name: postData.name,
            title: postData.title,
            text: postData.text
        };

        setPost(prevPosts => [...prevPosts, post]);
        setUser(prevUser => [...prevUser, postData]);
    };   

    const deletePost = (title) => {
        setPost((prevPosts) => prevPosts.filter((p) => p.title !== title));
        setUser((prevUsers) => prevUsers.filter((u) => u.title !== title));
    }

    console.log(post);
    console.log(user);
    

    return (
        <PostContext.Provider value={{ post, user, updatePost, deletePost }}>
        {children}
        </PostContext.Provider>
    );
}