var React = require('react');
var TodoSearch = require('TodoSearch');
import '../styles/app.scss';

var Sidebar = React.createClass({

  render: function () {
    return(
      <div className="sidebar">
        <div id="sidebar-container">
        <h1>21</h1>
        <p>february</p>
        <div>
          <ul>
            <li>To Do</li>
            <li>Groceries</li>
            <li>Work</li>
          </ul>
          <TodoSearch onSearch={this.props.handleSearch}/>
          </div>
        </div>
      </div>
      )
    }
});

module.exports = Sidebar;
