import { useState } from "react";
import CardPost from "../../components/CardPost";
import Container from "../../components/Container";
import Delete from "../../components/Delete";
import Edit from "../../components/Edit";
import Header from "../../components/Header";
import Mind from "../../components/Mind";
import { usePosts } from "../../contexts/PostsContext";

const Home = () => {
    const [ del, setDel ] = useState(false);
    const [ edit, setEdit ] = useState(false);
    
    const { post } = usePosts();

    const getOp = (op) => {
        op === 'del' ? setDel(true) : setEdit(true);
    }
    return (
        <>
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
                                sendOp={getOp}
                            />
                        )) : '' 
                    }
                </section>
                {del && <Delete/>}
                {edit && <Edit/>}
            </Container>
        </>
    );
};

export default Home;
