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

  it('should create addTo and dispatch ADD_TODO', (done)=>{

    const store = createMockStore({});
    const todoText = 'something';

    store.dispatch(actions.startAddTodo(todoText)).then(()=>{
      const actions = store.getActions();

      expect(actions[0]).toInclude({type:'ADD_TODO'});
      expect(actions[0].todo).toInclude({text:todoText});
      done();
    }).catch(done);

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


  describe('Tests with firebase todos', ()=>{

    var testTodoRef = firebaseRef.child('todos').push();

    beforeEach((done)=>{
      testTodoRef.set({
        text:'test todo',
        completed:false,
        createdAt:23432
      }).then(()=>done());
    });

    afterEach((done)=>{
      testTodoRef.remove().then(()=>done());
    });

    it('should toggle todo and dispatch UPDATE_TODO actions', (done)=>{
      var mockStore = createMockStore({});

      mockStore.dispatch(actions.startToggleTodo(testTodoRef.key, true )).then(()=>{
        var storeActions = mockStore.getActions();
        expect(storeActions[0]).toInclude({type:'UPDATE_TODO', id: testTodoRef.key});
        expect(storeActions[0].updates).toInclude({completed:true});
        expect(storeActions[0].updates.completedAt).toExist();
        done();
      }, done);

    });


  });

});
