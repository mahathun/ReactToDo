var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');

var actions = require('actions');

export var Todo = React.createClass({

  render:function(){
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed?'todo todo-completed':'todo';

    var renderDate = ()=>{
      var timestamp =0;
      var message = "";
      if(completed){
        var message ="Completed at: ";
        timestamp = completedAt;
      }else{
        var message = "Created at: ";
        timestamp = createdAt;
      }
      return message+moment.unix(timestamp).format("Do MMMM Y @ h:mm a");
    }


    return (
      <div className={todoClassName} onClick={()=>{
        dispatch(actions.toggleTodo(id));
      }}>

          <div>
            <input type="checkbox"  checked={completed}/>
          </div>
          <div>
            <p>{text}</p>
            <p className="todo__subtext">
              {renderDate()}
            </p>
          </div>

      </div>
    );
  }
});

export default connect()(Todo);
