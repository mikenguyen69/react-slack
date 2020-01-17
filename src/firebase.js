import firebase from 'firebase';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyBqLnD4sIeJJC1Xbw-7KoDKmPb3dkbgMYQ",
    authDomain: "react-slack-22059.firebaseapp.com",
    databaseURL: "https://react-slack-22059.firebaseio.com",
    projectId: "react-slack-22059",
    storageBucket: "react-slack-22059.appspot.com",
    messagingSenderId: "253760192722",
    appId: "1:253760192722:web:dd94b641b8277c391e2d0b",
    measurementId: "G-NF265PYH73"
};

firebase.initializeApp(config);

export default firebase;