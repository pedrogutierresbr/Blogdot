import React, { useState } from "react";
import "./recuperar-senha.css";

import firebase from "../../config/firebase";
import "firebase/auth";

//Components
import Navbar from "../../components/navbar";

function RecuperarSenha() {
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperarSenha() {
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then((response) => {
                setMsg("Foi enviado um link no seu email para redefinir sua senha!");
            })
            .catch((error) => {
                setMsg("Informe um email válido!");
            });
    }

    return (
        <>
            <Navbar />

            <form className="text-center form-login mx-auto mt-5">
                <h3 className="mb-3 font-weight-bold">Recuperar Senha</h3>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control my-2"
                    placeholder="email"
                />

                <div className="msg my-4 text-center">
                    <span>{msg}</span>
                </div>

                <button
                    type="button"
                    onClick={recuperarSenha}
                    className="btn btn-lg btn-block btn-enviar"
                >
                    Recuperar Senha
                </button>
            </form>
        </>
    );
}

export default RecuperarSenha;
