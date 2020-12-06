import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBeTtjvg1Qvvg_CROCU8xh1ZDSnmkhwagY",
  authDomain: "whatsapp-clone-d26b7.firebaseapp.com",
  projectId: "whatsapp-clone-d26b7",
  storageBucket: "whatsapp-clone-d26b7.appspot.com",
  messagingSenderId: "274338046287",
  appId: "1:274338046287:web:6990407799b9ac1e32253a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db