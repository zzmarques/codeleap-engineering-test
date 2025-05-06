import { useEffect, useState } from "react";
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
                    {/* {
                        user.posts.length > 0 ? user.posts.map((el, i) => (
                            <section className="container-posts">
                                <CardPost
                                    key={i}
                                    name={el.name}
                                    title={el.title}
                                    text={el.text}
                                />
                            </section>
                        )) : '' 
                    } */}
            </Container>
        </>
    );
};

export default Home;
