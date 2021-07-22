import { createStore } from "redux";
import usuarioReducer from "../reducers/usuarioReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "blogdot",
    storage,
};

const persistedReducer = persistReducer(persistConfig, usuarioReducer);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export { store, persistor };
