import CardPost from "../../components/CardPost";
import Container from "../../components/Container";
import Delete from "../../components/Delete";
import Edit from "../../components/Edit";
import Header from "../../components/Header";
import Mind from "../../components/Mind";
import { usePosts } from "../../contexts/PostsContext";

const Home = () => {

    const { post } = usePosts();

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
                            />
                        )) : '' 
                    }
                </section>
            </Container>
        </>
    );
};

export default Home;
