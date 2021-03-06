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

export const addCollectionAndDocuments =  async (collectionkey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionkey)
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj =>{
        const newDocRef = collectionRef.doc();
       batch.set(newDocRef, obj);
        console.log(newDocRef);
    });

   return await  batch.commit();
}; 

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
return transformedCollection.reduce( (accumulator, collection) =>{
accumulator[collection.title.toLowerCase()] = collection;
  return accumulator;
    }, {});
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe =  auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
          }, reject)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;