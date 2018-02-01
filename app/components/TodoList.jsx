var React = require('react');
var Todo = require('Todo');

import '../styles/app.scss';

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo)=>{
        return(
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
          );
      })
    };
    return(
      <div>
      <h2>To Do</h2>
      <div className="todos-container">
      {renderTodos()}
      </div>
      </div>
      )
  }
});

module.exports = TodoList;
