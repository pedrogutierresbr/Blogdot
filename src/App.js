import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../src/store/index";
import { PersistGate } from "redux-persist/integration/react";

// Páginas da aplicação
import Home from "./view/home/";
import Login from "./view/login/";
import NovoUsuario from "./view/usuario-novo/";
import RecuperarSenha from "./view/recuperar-senha/";
import CadastroEvento from "./view/cadastro-evento";
import DetalhesEvento from "./view/detalhes-evento";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/eventos/:parametro" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/novousuario" component={NovoUsuario} />
                    <Route exact path="/recuperarsenha" component={RecuperarSenha} />
                    <Route exact path="/cadastroevento" component={CadastroEvento} />
                    <Route path="/detalhesevento/:id" component={DetalhesEvento} />
                    <Route path="/editarevento/:id" component={CadastroEvento} />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
