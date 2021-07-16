import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBXE_MYaCPy0UqpQYyTwOgkDIaOzAFjMdI",
    authDomain: "sistema-publicacao-de-eventos.firebaseapp.com",
    projectId: "sistema-publicacao-de-eventos",
    storageBucket: "sistema-publicacao-de-eventos.appspot.com",
    messagingSenderId: "993408284254",
    appId: "1:993408284254:web:01329ffe93cd32ae5426cf",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
