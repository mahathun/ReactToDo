var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit:function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length >0){
      this.refs.todoText.value="";
      // this.props.onAddTodo(todoText);
      // this.props.dispatch(actions.addTodo(todoText));
      this.props.dispatch(actions.startAddTodo(todoText));
    }else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="addTodoForm" onSubmit={this.handleSubmit}>
          <input ref="todoText" type="text" placeholder="what do you need to do"/>
          <button className="button primary expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
