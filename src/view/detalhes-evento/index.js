/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./detalhes-evento.css";

import firebase from "../../config/firebase";

//Components
import Navbar from "../../components/navbar";

function DetalhesEvento(props) {
    const [evento, setEvento] = useState({}); //tem que ter o {} porque o firebase devolve uma estrutura JSON
    const [urlImg, setUrlImg] = useState({}); //para guardar a url da imagem que esta no firestore
    const usuarioLogado = useSelector((state) => state.usuarioEmail);

    //Pra toda hora que carregar a tela ele ir la no firebase e carregar as infos em tela
    useEffect(() => {
        firebase
            .firestore()
            .collection("eventos")
            .doc(props.match.params.id)
            .get()
            .then((resultado) => {
                //salva os dados do evento no estado Evento
                setEvento(resultado.data());
                //salva a url da imagem no estado UrlImg
                firebase
                    .storage()
                    .ref(`imagens/${evento.foto}`)
                    .getDownloadURL()
                    .then((url) => setUrlImg(url));
            });
    }, [evento.foto, props.match.params.id]);

    return (
        <>
            <Navbar />
            <div className="container-fluid ">
                <div className="row">
                    <img src={urlImg} className="img-banner" alt="Banner" />
                    <h2 className="mx-auto mt-5 titulo">
                        <strong>{evento.titulo}</strong>
                    </h2>
                </div>

                <div className="row mt-5 d-flex justify-content-around">
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-ticket-alt fa-2x"></i>
                        <h5>
                            <strong>Tipo</strong>
                        </h5>
                        <span className="mt-3">{evento.tipo}</span>
                    </div>

                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-calendar-alt fa-2x"></i>
                        <h5>
                            <strong>Data</strong>
                        </h5>
                        <span className="mt-3">{evento.data}</span>
                    </div>

                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-clock fa-2x"></i>
                        <h5>
                            <strong>Hora</strong>
                        </h5>
                        <span className="mt-3">{evento.hora}</span>
                    </div>
                </div>

                <div className="row box-detalhes mt-5">
                    <div className="col-12 text-center">
                        <h5>
                            <strong>Detalhes do Evento</strong>
                        </h5>
                    </div>

                    <div className="col-12 text-center">
                        <p className="text-justify py-3 px-5">{evento.detalhes}</p>
                    </div>
                </div>

                {usuarioLogado === evento.usuario ? (
                    <Link to="/" className="btn-editar">
                        <i className="fas fa-pen-square fa-3x"></i>
                    </Link>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default DetalhesEvento;
