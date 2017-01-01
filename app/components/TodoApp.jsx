var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

var TodoAPI = require('TodoAPI');
// var TodoList = require('TodoList');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
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
  handleSearch :function (showCompleted, searchText) {
    //alert('showCompleted: '+showCompleted+'\nSearchText : '+ searchText);
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });


  },
  render:function () {
    var {todos, showCompleted,searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (

      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-4">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = TodoApp;
