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

    return (
        <PostContext.Provider value={{ post, user, updatePost }}>
        {children}
        </PostContext.Provider>
    );
}