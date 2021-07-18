import { createStore } from "redux";
import usuarioReducer from "../reducers/usuarioReducer";

const store = createStore(usuarioReducer);

export default store;
