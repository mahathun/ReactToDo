var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');

var TodoApp = React.createClass({
  getInitialState:function () {
    return ({
      showCompleted:false,
      searchText:'',
      todos:[
        {
          id:uuid(),
          text:"walk the dog"
        },
        {
          id:uuid(),
          text:"Clean the yard"
        },
        {
          id:uuid(),
          text:"Do the homework"
        },
        {
          id:uuid(),
          text:"go shopping"
        }
      ]
    });
  },
  handleAddTodo : function (text) {
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          text:text
        }
      ]
    });
  },
  handleSearch :function (showCompleted, searchText) {
    alert('showCompleted: '+showCompleted+'\nSearchText : '+ searchText);
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
  },
  render:function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
