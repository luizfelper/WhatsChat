import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import applicaofirebase from './firebaseConfig'; //Importa as configurações do firebase

const firebaseApp = firebase.initializeApp(applicaofirebase);
/* const db = firebaseApp.firebase(); */

export default {
    fbPopup:async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        const result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
}

//Após 3:26:00 do vídeo ele vai fazer o login do Facebook.
//https://www.youtube.com/watch?v=BkX4niTo9Ow&t=12907s&ab_channel=BoniekyLacerda