import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDw90W0wjTc2O6Gup0sHuyA6cKW-SwDLz0",
    authDomain: "fakebook-march1.firebaseapp.com",
    databaseURL: "https://fakebook-march1-default-rtdb.firebaseio.com",
    projectId: "fakebook-march1",
    storageBucket: "fakebook-march1.appspot.com",
    messagingSenderId: "462326487390",
    appId: "1:462326487390:web:14e765a609f1810bfb17cf"
};

firebase.initializeApp(firebaseConfig);

export default firebase;