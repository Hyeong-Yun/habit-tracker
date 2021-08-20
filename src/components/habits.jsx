import React, { Component } from 'react'
import Habit from './habit'
import AddForm from './addForm'

export class Habits extends Component {
    handleIncrement = (habit) =>{
        this.props.onIncrement(habit)
    }
    
    handleDecrement = (habit) =>{
        this.props.onDecrement(habit)
    }
    
    handleDelete = (habit) =>{
        this.props.onDelete(habit)
    }
    
    handleAdd = (name) =>{
        this.props.onAdd(name)
    }

    handleReset = () =>{
        this.props.onReset();
    }

    render() {
        return (
            <>
              <AddForm onAdd = {this.handleAdd}/>
            <ul>
                {
                    this.props.habits.map(habit => {
                      return  <Habit 
                      onIncrement = {this.handleIncrement} 
                      onDecrement = {this.handleDecrement} 
                      onDelete = {this.handleDelete} 
                      habit = {habit}
                      key = {habit.id}
                      />
                    })
                }
            </ul>
            <button onClick ={this.handleReset} className = "rest-btn">Reset All</button>
            </>
        )
    }
}

export default Habits