import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function Navbar() {
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg d-flex justify-content-between">
            <i className="far fa-comment-dots  text-white fa-2x"></i>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i class="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active ml-2">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    {/* useSelector: vai la na store, pega o usuarioLogado de la e: se condicional verdadeiro mostra opções Publicar Eventos, Meus Eventos e Sair, se falso cadastrar e login */}
                    {useSelector((state) => state.usuarioLogado) > 0 ? (
                        <>
                            <li className="nav-item active">
                                <Link to="" className="nav-link">
                                    Publicar Eventos
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="" className="nav-link">
                                    Meus Eventos
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link
                                    onClick={() => dispatch({ type: "LOG_OUT" })}
                                    className="nav-link"
                                >
                                    Sair
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item active">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/novousuario" className="nav-link">
                                    Cadastrar
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
