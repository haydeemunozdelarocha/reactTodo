var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoAPI = require('TodoAPI');
var Sidebar = require('Sidebar');

var uuid = require('node-uuid');
var moment = require('moment');
import '../styles/app.scss';

var TodoApp = React.createClass({
    getInitialState: function (){
    return{
      showCompleted:false,
      searchText:'',
      todos:TodoAPI.getTodos()
      };
  },
  componentDidUpdate: function (){
    TodoAPI.setTodos(this.state.todos);
  },
  handleToggle:function(id){
    var updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment()
.unix() : undefined;
}
      return todo;
    });
    this.setState({todos:updatedTodos})
  },
  handleAddTodo:function(text){
    this.setState({
      todos:[...this.state.todos,{
        text:text,
        id: uuid(),
        completed:false,
        createdAt: moment().unix(),
        completedAt:undefined
      }]
    });
  },
    handleSearch:function(showCompleted, searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
  },
render: function() {
  var {todos,showCompleted,searchText} = this.state;
  var filteredTodos = TodoAPI.filteredTodos(todos,showCompleted,searchText);
  return(
        <div id="app">
          <Sidebar handleSearch={this.handleSearch}/>
          <div id="todolist">
          <TodoList todos = {filteredTodos} onToggle={this.handleToggle}/>
          <AddTodo onAddTodo = {this.handleAddTodo}/>
          </div>
          <div id="quotes">
          <div id="image-container">
            <img src="/images/1.jpg" />
            </div>
          </div>
        </div>
  )
}
});

module.exports = TodoApp;
