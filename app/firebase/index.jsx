import firebase from 'firebase';

try {
  var config = {
     apiKey: "AIzaSyDtA9e-0EaYRE1uApEWy7Uha7D5AsyJzbo",
     authDomain: "dan-todo-app.firebaseapp.com",
     databaseURL: "https://dan-todo-app.firebaseio.com",
     storageBucket: "dan-todo-app.appspot.com",
     messagingSenderId: "1041923421094"
   };
   firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
