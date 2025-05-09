import { usePosts } from "../../contexts/PostsContext";
import CardPost from "../../components/CardPost";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Mind from "../../components/Mind";
import "../../sass/pages/_Home.scss"
import LoginNotification from "../../components/LoginNotification";
import { useState } from "react";

const Home = () => {
    
    const { post } = usePosts();
    const [ log, setLog ] = useState(true);

    const onLogin = () => {
        setLog(false)
    }
    
    return (
        <>
            {log && <LoginNotification onLogin={onLogin}/>}
            <Header/>
            <Container>
                <Mind/>
                <section className="container-posts">
                    {
                        post.length > 0 ? post.map((el, i) => (
                            <CardPost
                                key={i}
                                name={el.name}
                                title={el.title}
                                text={el.text}
                                createdAt={el.createdAt}
                            />
                        )) : '' 
                    }
                </section>
            </Container>
        </>
    );
};

export default Home;
