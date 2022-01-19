import React, { Component} from 'react';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        {action: 'buy food', done: 'false'},
        {action: 'call Mom', done: 'false'},
        {action: 'schdedule meeting', done: 'false'},
      ],
      newTask: '',
    }
  }

  showTodo = () => {
    this.state.todoItems.map(item => (
      <tr key={Date.now()}>
        <td>{item.action}</td>
      </tr>
    ))
  }

  updateValue = (e) => {
    this.setState({ newTask: e.target.value })
    console.log(this.state.newTask)
  }

  render() {
    
    
    return (
      <div className="App">
        <div className="container">
          <h2>👋 TODO list</h2>
          <table>
            <thead>
              <tr>
                <th>New tasks</th>
              </tr>
            </thead>
            <tbody>
              { this.showTodo() }
            </tbody>
          </table>
          <form onSubmit={this.showTodo}>
            <input 
              onChange={ this.updateValue }
              type="text" 
              name="new-task" 
              className="add-task"
              defaultValue={this.state.newTask} 
              placeholder="+ Add a task"/>
          </form>
        </div>
      </div>
    )
  }


}

export default App