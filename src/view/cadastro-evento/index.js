/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./cadastro-evento.css";

import firebase from "../../config/firebase";
import "firebase/auth";

//Components
import Navbar from "../../components/navbar";

function CadastroEvento() {
    const [msgTipo, setMsgTipo] = useState("sucesso");
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const [carregando, setCarregando] = useState();

    //pega o usuario da store e salva no estado usuarioEmail
    const usuarioEmail = useSelector((state) => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();

    function cadastrar() {
        setCarregando(1);
        setMsgTipo(null);

        storage
            .ref(`imagens/${foto.name}`)
            .put(foto)
            .then(() => {
                db.collection("eventos")
                    .add({
                        titulo: titulo,
                        tipo: tipo,
                        detalhes: detalhes,
                        data: data,
                        hora: hora,
                        usuario: usuarioEmail,
                        visualizacoes: 0,
                        foto: foto.name,
                        publico: 1,
                        criacao: new Date(),
                    })
                    .then(() => {
                        setCarregando(0);
                        setMsgTipo("sucesso");
                    });
            })
            .catch((erro) => {
                setCarregando(0);
                setMsgTipo("erro");
            });
    }

    return (
        <>
            <Navbar />
            <div className="col-12 mt-5">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold ">Novo Evento</h3>
                </div>

                <form>
                    <div className="form-group">
                        <label>Titulo:</label>
                        <input
                            onChange={(e) => setTitulo(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>Tipo do Evento:</label>
                        <select onChange={(e) => setTipo(e.target.value)} className="form-control">
                            <option disabled selected value>
                                -- Selecione um tipo --
                            </option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Evento</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Descrição do evento:</label>
                        <textarea
                            onChange={(e) => setDetalhes(e.target.value)}
                            className="form-control"
                            rows="3"
                        />
                    </div>

                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <input
                                onChange={(e) => setData(e.target.value)}
                                type="date"
                                className="form-control"
                            />
                        </div>
                        <div className="col-6">
                            <label>Hora:</label>
                            <input
                                onChange={(e) => setHora(e.target.value)}
                                type="time"
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Upload da foto:</label>
                        <input
                            onChange={(e) => setFoto(e.target.files[0])}
                            type="file"
                            className="form-control"
                        />
                    </div>

                    <div className="row">
                        {carregando > 0 ? (
                            <Spinner
                                className="mx-auto"
                                animation="border"
                                variant="danger"
                                role="status"
                            >
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        ) : (
                            <button
                                onClick={cadastrar}
                                type="button"
                                className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
                            >
                                Publicar evento
                            </button>
                        )}
                    </div>
                </form>

                <div className="msg-login text-center mt-2">
                    {msgTipo === "sucesso" && (
                        <span>
                            <strong>Wow!</strong> Evento publicado! &#129304;
                        </span>
                    )}
                    {msgTipo === "erro" && (
                        <span>
                            <strong>Ops!</strong> Não foi possível publicar o evento! &#128078;
                        </span>
                    )}
                </div>
            </div>
        </>
    );
}

export default CadastroEvento;
