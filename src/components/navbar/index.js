import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-white font-weight-bold">Bolgdot</span>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
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
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
