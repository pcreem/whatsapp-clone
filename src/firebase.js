import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA14P3VPyL9pogP9IDhY3odiorI53YvB1w",
    authDomain: "whatsapp-clone-f9d56.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-f9d56.firebaseio.com",
    projectId: "whatsapp-clone-f9d56",
    storageBucket: "whatsapp-clone-f9d56.appspot.com",
    messagingSenderId: "125667769910",
    appId: "1:125667769910:web:9daf32d9ee2d7038366297"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db