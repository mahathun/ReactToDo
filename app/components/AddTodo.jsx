var React = require('react');

var AddTodo = React.createClass({
  handleSubmit:function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length >0){
      this.refs.todoText.value="";
      this.props.onAddTodo(todoText);
    }else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form ref="addTodoForm" onSubmit={this.handleSubmit}>
          <input ref="todoText" type="text" placeholder="what do you need to do"/>
          <button className="button primary expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
