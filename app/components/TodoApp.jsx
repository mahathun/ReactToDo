var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({
  getInitialState:function () {
    return ({
      showCompleted:false,
      searchText:'',
      todos: TodoAPI.getTodos()
    });
  },
  componentDidUpdate:function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo : function (text) {
    var now = moment();
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          text:text,
          completed:false,
          createdAt:moment().unix(),
          completedAt:undefined
        }
      ]
    });
  },
  handleSearch :function (showCompleted, searchText) {
    //alert('showCompleted: '+showCompleted+'\nSearchText : '+ searchText);
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });


  },
  handleToggle:function (id) {
    var updatedTodos = this.state.todos;
    updatedTodos.forEach((todo)=>{
      if(todo.id===id){

        todo.completed = !todo.completed;
        todo.completedAt = todo.completed?moment().unix():undefined;
      }
      return todo;
    });
    this.setState({todos:updatedTodos});

    // alert(id);
  },
  render:function () {
    var {todos, showCompleted,searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
