import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlorbQNSpaP9nz4bL-QeaKKUMSRFH_1yQ",
    authDomain: "clone-c8c16.firebaseapp.com",
    projectId: "clone-c8c16",
    storageBucket: "clone-c8c16.appspot.com",
    messagingSenderId: "457658925466",
    appId: "1:457658925466:web:db1302b97ce4a70ba9fa23",
    measurementId: "G-SHVT9LE91R"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {db,auth ,provider}