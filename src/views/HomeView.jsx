import React from "react";
import Header from "../components/Header";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";
import Titlecard from "../components/Titlecard";
const HomeView = () => {
    return (
    <>
  <Skip />
        <Header />
        <Main>
        <Port />
        <Titlecard/>
            <Skill />
            <Site />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;
