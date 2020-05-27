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

export const createUserProfileDocument = async (userAuth, additionalData) => {
if(!userAuth)  return ;

const userRef =  firestore.doc(`users/${userAuth.uid}`);

const snapShot =  await userRef.get();

 if(!snapShot.exists)
 {
     const { displayName, email} = userAuth;
     const createdAt = new Date ();

     try {
          await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
          })
     } catch (error)
     {
     console.log('error creating user', error.message);
     }
 }
 return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;