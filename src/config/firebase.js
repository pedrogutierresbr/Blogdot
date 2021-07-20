import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOxVzpWOAPXwqC9eAodH-Wu61-LtKtvu8",
    authDomain: "blogdot-d10e1.firebaseapp.com",
    projectId: "blogdot-d10e1",
    storageBucket: "blogdot-d10e1.appspot.com",
    messagingSenderId: "164857597360",
    appId: "1:164857597360:web:3a40229472676cdb165a75",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
