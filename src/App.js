import React, { Component } from 'react'
import Habits from './components/habits'
import Navbar from './components/navbar'
import './App.css'


export default class App extends Component {
  state = {
    habits:[
       {id: 1, name: "Reading", count: 0},
       {id: 2, name: "Running", count: 0},
       {id: 3, name: "Coding", count: 0}
    ]
}

handleIncrement = (habit) =>{
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count++;
    this.setState({habits})
}

handleDecrement = (habit) =>{
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    const value = habits[index].count - 1;
    habits[index].count = value < 0 ? 0:value;

    this.setState({habits})
}

handleDelete = (habit) =>{
    const habits = this.state.habits.filter(item => item.id !== habit.id)
    this.setState({habits})
}

handleAdd = (name) =>{
  const habits = [...this.state.habits, {id: Date.now(), name: name , count: 0}]
  this.setState({habits})
}

handleReset = () =>{
  const habits = this.state.habits.map(habit =>{
    habit.count = 0;
    return habit
  })
  this.setState({habits})
}

  render() {
    return (
      <>
        <Navbar totalCount = {this.state.habits.filter(item => item.count > 0).length}/>
        <Habits 
        onIncrement = {this.handleIncrement} 
        onDecrement = {this.handleDecrement} 
        onDelete = {this.handleDelete}
         habits = {this.state.habits}
         onAdd = {this.handleAdd}
         onReset = {this.handleReset}
         /> 
       </>
    )
  }
}
