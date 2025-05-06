import CardPost from "../../components/CardPost";
import Container from "../../components/Container";
import Delete from "../../components/Delete";
import Edit from "../../components/Edit";
import Header from "../../components/Header";
import Mind from "../../components/Mind";
import { getUser } from "../../utils/user";

const Home = () => {

    const user = getUser();
    console.log(user)
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
