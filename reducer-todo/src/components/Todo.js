import React,  {useState, useReducer} from 'react'
import {task, reducer} from '../reducers/Reducer'
import styled from 'styled-components'
 
const Task = () => {
    const [state, dispatch] = useReducer(reducer, task)
    
    const [newTask, setNewTask] = useState('')

    const handleChanges = e => {
        setNewTask(e.target.value)
    }

    return (
        <div className="todo-list">
            <div className="container">
                <h1>Reducer To Do</h1>

                {state.map(state => {
                    return (
                        <div className = {`item${state.completed ? " completed" : ""}`}
                          onClick={() => {
                            dispatch({ type: 'TOGGLE_COMPLETED', payroad: state.id })
                          }}
                        >
                        <div className="colored">
                            <p className="invisible">here</p>
                             </div>
                            <p>{state.item}</p>
                        </div>
                    )
                })}

                <input
                  className="input"
                  type="text"
                  name="newTask"
                  value={newTask}
                  onChange={handleChanges}
                  placeholder="Add todos here..."
                />

                <button
                  className="btnitem"
                  onClick={() => {
                      dispatch({ type: "ADD_TASK", payload: newTask })
                  }}
                >
                    Add Todo
                </button>

                <button
                  className="btnitem"
                  onClick={() => {
                      dispatch({ type: "CLEAR_COMPLETED" })
                  }}
                >
                    Clear Completed
                </button>
            </div>
        </div>
    )
}

export default Task