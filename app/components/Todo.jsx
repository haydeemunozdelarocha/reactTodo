var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    var {text,id,completed,createdAt,completedAt} = this.props;
    var renderDate = ()=>{
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed){
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return(
      <div className="todo" onClick = {()=>{
        this.props.onToggle(id);
      }}>
      <div className="todo-text">
      <p>{text}</p>
      <p className="todo-date">{renderDate()}</p>
      </div>
      <input type="checkbox" checked={completed} id={id}/>
      </div>
      )
  }
});

module.exports = Todo;
