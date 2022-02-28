import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
   apiKey: "AIzaSyC-8okzcmAhsvvH5H1QXLC_FAfIeguFzvY",
   authDomain: "vuejs-firebase-site.firebaseapp.com",
   projectId: "vuejs-firebase-site",
   storageBucket: "vuejs-firebase-site.appspot.com",
   messagingSenderId: "974393435683",
   appId: "1:974393435683:web:fb2f0c2acfad8eeb757396"
 };

//init firebase
firebase.initializeApp(firebaseConfig)
//init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }