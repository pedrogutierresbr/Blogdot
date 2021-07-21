import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import firebase from "../../config/firebase";

import "./home.css";

//Components
import Navbar from "../../components/navbar";
import EventoCard from "../../components/evento-card";

function Home({ match }) {
    const [eventos, setEventos] = useState([]); //Eventos vindos do firebase
    const [pesquisa, setPesquisa] = useState("");
    let listaEventos = [];

    const usuarioEmail = useSelector((state) => state.usuarioEmail); //via redux me informa qual usuario esta logado

    useEffect(() => {
        //if: condicao que mostra eventos do user logado 'match'
        if (match.params.parametro) {
            firebase
                .firestore()
                .collection("eventos")
                .where("usuario", "==", usuarioEmail)
                .get()
                .then(async (resultado) => {
                    await resultado.docs.forEach((doc) => {
                        if (doc.data().titulo.indexOf(pesquisa) >= 0) {
                            listaEventos.push({
                                id: doc.id,
                                ...doc.data(),
                            });
                        }
                    });

                    setEventos(listaEventos);
                });
        } else {
            //else: condicao que mostra todos os eventos da plataforma
            firebase
                .firestore()
                .collection("eventos")
                .get()
                .then(async (resultado) => {
                    await resultado.docs.forEach((doc) => {
                        if (doc.data().titulo.indexOf(pesquisa) >= 0) {
                            listaEventos.push({
                                id: doc.id,
                                ...doc.data(),
                            });
                        }
                    });

                    setEventos(listaEventos);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Navbar />

            <div className="row p-5">
                <h2 className="mx-auto mb-5">Eventos Publicados</h2>
                <input
                    onChange={(e) => setPesquisa(e.target.value)}
                    type="text"
                    className="form-control text-center "
                    placeholder="Pesquisar Evento pelo Título ..."
                />
            </div>

            <div className="row p-4 mx-auto">
                {eventos.map((item) => (
                    <EventoCard
                        key={item.id}
                        id={item.id}
                        img={item.foto}
                        titulo={item.titulo}
                        detalhes={item.detalhes}
                        visualizacoes={item.visualizacoes}
                    />
                ))}
            </div>
        </>
    );
}

export default Home;
