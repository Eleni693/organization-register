//import firebase from "firebase/app";
//import "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/compat/database"


const firebaseConfig = {

    apiKey: "AIzaSyBZNr8JneDkNMv2x5ndHu5v5Mkm4eSzW-Q",
  
    authDomain: "react-org-c1e83.firebaseapp.com",
  
    databaseURL: "https://react-org-c1e83-default-rtdb.firebaseio.com",
  
    projectId: "react-org-c1e83",
  
    storageBucket: "react-org-c1e83.appspot.com",
  
    messagingSenderId: "388955296351",
  
    appId: "1:388955296351:web:995b826e29d84ac02781ea"
  
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();