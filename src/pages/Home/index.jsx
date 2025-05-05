import CardPost from "../../components/CardPost";
import Container from "../../components/Container";
import Delete from "../../components/Delete";
import Edit from "../../components/Edit";
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
                {/* <Delete/> */}
                {/* <Edit/> */}
            </Container>
        </>
    );
};

export default Home;
