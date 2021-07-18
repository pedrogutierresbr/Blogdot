import React, { useState } from "react";
import "./login.css";
import { Link, Redirect } from "react-router-dom";

import firebase from "../../config/firebase";
import "firebase/auth";

import { useSelector, useDispatch } from "react-redux";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [msgTipo, setMsgTipo] = useState("");

    const dispatch = useDispatch();

    function Logar() {
        //autenticou com firebase e com a promise tratou as respostas
        firebase
            .auth()
            .signInWithEmailAndPassword(email, senha)
            .then((res) => {
                setMsgTipo("sucesso");
                dispatch({ type: "LOG_IN", usuarioEmail: email });
            })
            .catch((err) => {
                setMsgTipo("erro");
            });
    }

    return (
        <div className="login-content d-flex align-items-center">
            {/* condicional para redirecionar usuario para home caso logado, senao nao faz nada */}
            {useSelector((state) => state.usuarioLogado) > 0 ? <Redirect to="/" /> : null}

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
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
                    {msgTipo === "sucesso" && (
                        <span>
                            <strong>Wow!</strong> Você esta conectado! &#129304;
                        </span>
                    )}
                    {msgTipo === "erro" && (
                        <span>
                            <strong>Ops!</strong> Verifique se senha ou usuário estão
                            corretos! &#128078;
                        </span>
                    )}
                </div>

                <div className="opcoes-login mt-5 d-flex justify-content-around">
                    <a href="/" className="mx-2">
                        Recuperar Senha
                    </a>
                    <span className=" text-white ">&#8900;</span>
                    <Link to="/novousuario" className="mx-2">
                        Cadastre-se
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
