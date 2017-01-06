// import firebase from 'firebase';
//
// var config = {
//    apiKey: "AIzaSyDtA9e-0EaYRE1uApEWy7Uha7D5AsyJzbo",
//    authDomain: "dan-todo-app.firebaseapp.com",
//    databaseURL: "https://dan-todo-app.firebaseio.com",
//    storageBucket: "dan-todo-app.appspot.com",
//    messagingSenderId: "1041923421094"
//  };
//  firebase.initializeApp(config);
//
//  var firebaseRef = firebase.database().ref();
//
// firebaseRef.set({
//    app:{
//      name:'Todo App',
//      version:'1.0.0'
//    },
//    isRunning:true,
//    user:{
//      name:'Andrew',
//      age:25
//    }
//  });

//  firebaseRef.update({
//    'app/name' : 'TODO',
//    'user/name': 'Dan'
//  });
// firebaseRef.child('app').update({name:'Hello Todo'});
// firebaseRef.child('user').update({name:'Tharindu'});
//
// firebaseRef.update({isRunning:null});
// firebaseRef.child('user/age').remove();
//
//
// firebaseRef.child('user/name').once('value').then((snapshot)=>{
//   console.log('Got the entire database: ', snapshot.key, snapshot.val());
// }, (error)=>{
//   console.log('Unable to fetch data.', error);
// });


// firebaseRef.child('user').on('value', (user)=>{
//   console.log('user ref changed', user.val());
// })
//
// firebaseRef.child('user').update({name:"Mike"});
// firebaseRef.child('app').update({name:"React Todo"});

// 
// var todosNode = firebaseRef.child('todos');
//
// todosNode.on('child_added', (todo)=>{
//   console.log("child added", todo.key, todo.val());
// });
//
// todosNode.push({text: 'Walk the dog'});
// todosNode.push({text: 'Hello world'});
