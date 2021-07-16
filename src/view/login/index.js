import React, { useState } from "react";
import "./login.css";

import firebase from "../../config/firebase";
import "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function Logar() {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, senha)
            .then((res) => {
                alert("Usuario logado com sucesso!");
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    {/* <img
                        className="mb-4"
                        src="/docs/5.0/assets/brand/bootstrap-logo.svg"
                        alt=""
                        width="72"
                        height="57"
                    /> */}
                    <h1 className="h3 mb-3 fw-normal font-weight-bold text-white">
                        Login
                    </h1>
                </div>

                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="inputEmail"
                    className="form-control my-2"
                    placeholder="Email"
                />
                <input
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                    id="inputPassword"
                    className="form-control my-2"
                    placeholder="Senha"
                />

                <button
                    onClick={Logar}
                    className="btn btn-lg btn-block btn-login"
                    type="button"
                >
                    Logar
                </button>

                <div className="msg-login text-white text-center my-5">
                    <span>
                        <strong>Wow!</strong> Você esta conectado! &#129304;
                        <br />
                        <strong>Ops!</strong> Verifique se senha ou usuário estão
                        corretos! &#128078;
                    </span>
                </div>

                <div className="opcoes-login mt-5 d-flex justify-content-around">
                    <a href="/" className="mx-2">
                        Recuperar Senha
                    </a>
                    <span className=" text-white ">&#8900;</span>
                    <a href="/" className="mx-2">
                        Cadastre-se
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Login;
