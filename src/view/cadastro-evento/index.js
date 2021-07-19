/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import "./cadastro-evento.css";

import firebase from "../../config/firebase";
import "firebase/auth";

//Components
import Navbar from "../../components/navbar";

function CadastroEvento() {
    return (
        <>
            <Navbar />
            <h1>Cadastro evento</h1>
        </>
    );
}

export default CadastroEvento;
