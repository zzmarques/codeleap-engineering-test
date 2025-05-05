import CardPost from "../../components/CardPost";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Mind from "../../components/Mind";

const Home = () => {
    return (
        <>
            <Header/>
            <Container>
                <Mind/>
                <section className="container-posts">
                    <CardPost/>
                    <CardPost/>
                </section>
            </Container>
        </>
    );
};

export default Home;
