/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import firebase from "../../config/firebase";

import "./evento-card.css";

function EventoCard(props) {
    const [urlImagem, setUrlImagem] = useState(); //estado que recebera a url da imagem que esta no storage do firebase

    useEffect(() => {
        firebase
            .storage()
            .ref(`imagens/${props.img}`)
            .getDownloadURL()
            .then((url) => setUrlImagem(url));
    });

    return (
        <div className="col-md-3 col-sm-12">
            <img src={urlImagem} className="card-img-top img-cartao" alt="Imagem do Evento" />

            <div className="card-body">
                <h5>{props.titulo}</h5>
                <p className="card-text text-justify">{props.detalhes}</p>

                <div className="row rodape-card d-flex align-items-center">
                    <div className="col-6">
                        <Link
                            to={"/eventodetalhes/" + props.id}
                            className="btn btn-sm btn-detalhes"
                        >
                            Mais detalhes
                        </Link>
                    </div>

                    <div className="col-6 text-right">
                        <i class="fas fa-eye"></i> <span>{props.visualizacoes}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventoCard;
