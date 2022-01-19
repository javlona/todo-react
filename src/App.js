import React, { Component} from 'react';
import Table from './components/Table'
import Form from './components/Form'

import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        {action: 'buy food', done: false},
        {action: 'call Mom', done: false},
        {action: 'schdedule meeting', done: false},
      ],
      newTask: '',
    }
  }

  toggleDone = (current) => {
    this.setState({
      todoItems: this.state.todoItems.map(item => 
        item.action === current.action ? { ...item, done: !item.done } : item
        )
    })
  }

  showTodo = () => {
    return this.state.todoItems.map(item => (
      <tr key={ item.action }>
        <td>
          <input 
            type="checkbox" 
            checked={ item.done }
            onChange={ () => this.toggleDone(item) }
            className="checkbox-round"/>
        </td>
        <td>
          { item.action }
        </td>
      </tr>
    ))
  }

  changeHandler = (e) => {
    this.setState({ newTask: e.target.value })
    console.log(this.state.newTask)
  }

  addTodo = (e) => {
    e.preventDefault();
    
    this.setState({todoItems: [
        ...this.state.todoItems,
        {action: this.state.newTask, done: false}
      ]
    })
  }

  render() {
    console.log(this.state.todoItems)
    
    return (
      <div className="App">
        <div className="container">
          <h2>👋 TODO list</h2>
          <Table 
            showTodo={ this.showTodo }/>
          <Form 
            addTodo={ this.addTodo }
            changeHandler={ this.changeHandler }
            newTask={ this.state.newTask }/>
        </div>
      </div>
    )
  }


}

export default App