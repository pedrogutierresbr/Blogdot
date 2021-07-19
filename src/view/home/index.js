import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

//Components
import Navbar from "../../components/navbar";

import { useSelector } from "react-redux";

function Home() {
    return (
        <>
            <Navbar />
            <h1>{useSelector((state) => state.usuarioLogado)}</h1>
            <h1>{useSelector((state) => state.usuarioEmail)}</h1>
        </>
    );
}

export default Home;
