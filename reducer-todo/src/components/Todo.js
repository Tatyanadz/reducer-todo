import React,  {useState, useReducer} from 'react'
import {task, reducer} from '../reducers/Reducer'
import styled from 'styled-components'
 
const TaskStyle = styled.div `
width: 100%;
.todo-list {
    width: 100%;
  }

  .container{
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    text-align: center;
    align-items: center;
   
  }
p {
    margin: 5%;
  }

  .item{
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    padding: 0 0%;
    height: 100px;
    margin: 2% 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
  
  }
  
.invisible {
    visibility: hidden;
}
  .input{
    display: flex;
    align-items: center;
    width: 94%;
    padding: 0 3%;
    height: 100px;
    margin: 2% 0%;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
    border: none;
    
  
  }
  .btnitem{
    border-radius: 20px;
    margin: 10px;
    width: 150px;
    height: 50px;
  }

  .btnitem:hover {
      background: #173F5F;
      cursor: pointer;
  }
  
  .item.completed {
    text-decoration: line-through;
    cursor: pointer;
  }
`

const Task = () => {
    const [state, dispatch] = useReducer(reducer, task)
    
    const [newTask, setNewTask] = useState('')

    const handleChanges = e => {
        setNewTask(e.target.value)
    }

    return (
        <TaskStyle>
            <div className="todo-list">
                <div className="container">
                    <h1>Reducer To Do</h1>

                    {state.map(state => {
                        return (
                            <div className = {`item${state.completed ? " completed" : ""}`}
                            onClick={() => {
                                dispatch({ type: 'TOGGLE_COMPLETED', payload: state.id })
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
        </TaskStyle>
    )
}




export default Task