import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 apiKey: "AIzaSyB4agIEENF8c59jEMMre45FDPQSbeV1nOo",
 authDomain: "crwn-clothing-db-9f9e8.firebaseapp.com",
 databaseURL: "https://crwn-clothing-db-9f9e8.firebaseio.com",
 projectId: "crwn-clothing-db-9f9e8",
 storageBucket: "crwn-clothing-db-9f9e8.appspot.com",
 messagingSenderId: "399378743825",
 appId: "1:399378743825:web:c2cba472cda34081f4a7b0",
 measurementId: "G-FQY7PK82WE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;