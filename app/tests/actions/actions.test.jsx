var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

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

  it('should generate toggleTodo action', ()=>{
    var action = {
      type: 'TOGGLE_TODO',
      id: 5
    };

    expect(actions.toggleTodo(action.id)).toEqual(action);
  });


});
