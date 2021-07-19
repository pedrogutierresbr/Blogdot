import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/index";

// Páginas da aplicação
import Home from "./view/home/";
import Login from "./view/login/";
import NovoUsuario from "./view/usuario-novo/";
import RecuperarSenha from "./view/recuperar-senha/";
import CadastroEvento from "./view/cadastro-evento";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/novousuario" component={NovoUsuario} />
                <Route exact path="/recuperarsenha" component={RecuperarSenha} />
                <Route exact path="/cadastroevento" component={CadastroEvento} />
            </Router>
        </Provider>
    );
}

export default App;
