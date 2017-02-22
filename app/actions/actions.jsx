import firebase, {firebaseRef, githubProvider} from 'app/firebase';

import moment from 'moment';

export var setSearchText = (searchText)=>{
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addTodo = (todo)=>{
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = (text)=>{
  return (dispatch, getState)=>{

    var todo =   {
                  text,
                  completed:false,
                  createdAt:moment().unix(),
                  completedAt:null
                };
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then(dispatch(addTodo({...todo, id:todoRef.key})));

  }
}

export var addTodos = (todos)=>{
  return {
    type:'ADD_TODOS',
    todos
  }
}

export var startAddTodos = ()=>{
  return (dispatch, getState)=>{
    console.log('test');
    var uid = getState().auth.uid;
    return firebaseRef.child(`users/${uid}/todos`).once('value', (snapshot)=>{

      var data = snapshot.val() || {};

      // var todos = [];
      // for(var todo in data){
      //   todos = [...todos, {id:todo, ...data[todo]}];
      // }
      var todos = Object.keys(data);
      todos = todos.map((id)=>{
        return {id, ...data[id]}
      })

      dispatch(addTodos(todos));
    }, (e)=>{console.log('helloooo');console.log(e);});
  };
}

export var toggleShowCompleted = ()=>{
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var updateTodo = (id, updates)=>{
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed)=>{
  return (dispatch, getState)=>{
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);

    var updates = {
      completed,
      completedAt:completed?moment().unix():null
    };
    return todoRef.update(updates).then(()=>{
      dispatch(updateTodo(id,updates));
    });

  }
}

export var startLogin = ()=>{
  return (dispatch, getState)=>{
    return firebase.auth().signInWithPopup(githubProvider).then((result)=>{
      console.log("Login Worked", result );
    }, ()=>{
      console.log("Login Failed");
    });
  }
}

export var startLogout = ()=>{
  return (dispatch, getState)=>{
    return firebase.auth().signOut().then(()=>{
      console.log("Logout worked");
    },()=>{
      console.log("Logout didn't worked, try again");
    });
  }
}

export var login = (uid)=>{
  return {
    type: 'LOGIN',
    uid
  }
}

export var logout = ()=>{
  return {
    type : 'LOGOUT'
  }
}
