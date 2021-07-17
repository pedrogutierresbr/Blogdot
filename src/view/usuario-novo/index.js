import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import "./usuario-novo.css";

import firebase from "../../config/firebase";
import "firebase/auth";

function NovoUsuario() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [msgTipo, setMsgTipo] = useState("");
    const [msg, setMsg] = useState("");
    const [carregando, setCarregando] = useState();

    function cadastrar() {
        setCarregando(1);
        setMsgTipo(null);

        if (!email || !senha) {
            setMsgTipo("erro");
            setMsg("Você precisa informar o email e senha para fazer o cadastro");
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, senha)
            .then((res) => {
                setCarregando(0);
                setMsgTipo("sucesso");
            })
            .catch((err) => {
                setCarregando(0);
                setMsgTipo("erro");
                switch (err.message) {
                    case "Password should be at least 6 characters":
                        setMsg("A senha deve ter pelo menos 6 caracteres");
                        break;

                    case "The email address is already in use by another account.":
                        setMsg("Este email já está sendo utilizado por outro usuário");
                        break;

                    case "The email address is badly formatted.":
                        setMsg("O formato do seu email é inválido");
                        break;

                    default:
                        setMsg(
                            "Não foi possível realizar o cadastro. Tente novamente mais tarde!"
                        );
                        break;
                }
            });
    }

    return (
        <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control my-2"
                    placeholder="Email"
                />
                <input
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                    className="form-control my-2"
                    placeholder="Senha"
                />

                {carregando ? (
                    <Spinner animation="border" variant="danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                ) : (
                    <button
                        onClick={cadastrar}
                        type="button"
                        className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
                    >
                        Cadastro
                    </button>
                )}

                <div className="msg-login text-black text-center my-5">
                    {msgTipo === "sucesso" && (
                        <span>
                            <strong>Wow!</strong> Usuário cadastrado com sucesso!
                            &#129304;
                        </span>
                    )}
                    {msgTipo === "erro" && (
                        <span>
                            <strong>Ops!</strong> {msg} &#128078;
                        </span>
                    )}
                </div>
            </form>
        </div>
    );
}

export default NovoUsuario;
