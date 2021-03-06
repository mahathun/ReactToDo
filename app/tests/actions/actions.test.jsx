var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', ()=>{
  it('should generate the searchText action', ()=>{
    var action = {
      type:'SET_SEARCH_TEXT',
      searchText: 'dog'
    };

    var actual = actions.setSearchText('dog');

    expect(actual).toEqual(action);
  });

  it('should generate the addTodo action', ()=>{
    var action = {
      type:'ADD_TODO',
      todo:{
        id:'abc123',
        text: 'test todo',
        completed:false,
        createdAt:323424,
      }
    };
    expect(actions.addTodo(action.todo)).toEqual(action);
  });



  it('should generate addTodos action', ()=>{
    var todos = [
      {
        id:111,
        text:'test todo',
        completed:false,
        completedAt:undefined,
        createdAt:4324
      }
    ];
    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });



  it('should generate toggleShowCompleted action', ()=>{
    var action = {
      type:"TOGGLE_SHOW_COMPLETED"
    };
    expect(actions.toggleShowCompleted()).toEqual(action);
  });

  it('should generate updateTodo action', ()=>{
    var updates = {
      completed: true,
      completedAt: 500
    }
    var action = {
      type: 'UPDATE_TODO',
      id: 5,
      updates
    };

    expect(actions.updateTodo(action.id, updates)).toEqual(action);
  });


  it('should generate login action', ()=>{
    var uid = '345kdfa';

    var action = {
      type: 'LOGIN',
      uid
    }

    expect(actions.login(uid)).toEqual(action);
  });

  it('should generate logout action', ()=>{
    var action = {type:'LOGOUT'};

    expect(actions.logout()).toEqual(action);
  });


  describe('Tests with firebase todos', ()=>{
    var uid;
    var todosRef;
    var testTodoRef;

    beforeEach((done)=>{


      firebase.auth().signInAnonymously().then((user)=>{
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);

        return todosRef.remove();

      }).then(()=>{
        testTodoRef = todosRef.push();
        return testTodoRef.set({
                                text:'test todo',
                                completed:false,
                                createdAt:23432
                              });
      })
      .then(()=>done())
      .catch(done);



      //var todosRef = firebaseRef.child('todos');

      // todosRef.remove().then(()=>{
      //   return testTodoRef.set({
      //                           text:'test todo',
      //                           completed:false,
      //                           createdAt:23432
      //                         });
      // })
      // .then(()=>done())
      // .catch(done);
    });

    afterEach((done)=>{
      testTodoRef.remove().then(()=>done());
    });

    it('should create addTo and dispatch ADD_TODO', (done)=>{

      const store = createMockStore({"auth":{uid}});
      const todoText = 'something';

      store.dispatch(actions.startAddTodo(todoText)).then(()=>{
        const actions = store.getActions();

        expect(actions[0]).toInclude({type:'ADD_TODO'});
        expect(actions[0].todo).toInclude({text:todoText});
        done();
      }).catch(done);

    });

    it('should toggle todo and dispatch UPDATE_TODO actions', (done)=>{
      const mockStore = createMockStore({"auth":{uid}});

      mockStore.dispatch(actions.startToggleTodo(testTodoRef.key, true )).then(()=>{
        var storeActions = mockStore.getActions();
        expect(storeActions[0]).toInclude({type:'UPDATE_TODO', id: testTodoRef.key});
        expect(storeActions[0].updates).toInclude({completed:true});
        expect(storeActions[0].updates.completedAt).toExist();
        done();
      }, done);

    });


      it('should fetch todos and dispatch ADD_TODOS actions', (done)=>{
        const mockStore = createMockStore({"auth":{uid}});

        mockStore.dispatch(actions.startAddTodos()).then(()=>{
          var mockActions = mockStore.getActions();

          expect(mockActions[0]).toInclude({type:'ADD_TODOS'});
          expect(mockActions[0].todos.length).toBe(1);
          expect(mockActions[0].todos).toInclude(
            {
              id:testTodoRef.key,
              text:'test todo',
              completed:false,
              createdAt:23432
          }
        );
          done();
        }, done);
      });


  });

});
