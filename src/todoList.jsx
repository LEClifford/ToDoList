import React, { useState } from "react";
import "./App.css";

function ToDoList() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){
    if(newTask.trim() !== ""){
      setTasks(t =>[...t, newTask]);
      setNewTask("");
    }
      
  }

  function deleteTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp (index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown (index){
    if(index < tasks.length -1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="todoApp">
      <h1>My To Do List</h1>

      <div className="input-wrapper">
        <input 
        type="text" 
        placeholder="Type a new to do" 
        value={newTask} 
        onChange={handleInputChange}
        
        />
        <button 
        className="add-button" 
        onClick={addTask}>
          Add
          </button>
      </div>
      <ol>
        {tasks.map((task, index) =>
        <li key={index}>
          <span className="text">{task}</span>
          <button className="delete-button" onClick={()=>deleteTask(index)}>
            Delete
          </button>
          <button className="move-button" onClick={()=>moveTaskUp(index)}>
          &#8593;
          </button>
          <button className="down-button" onClick={()=>moveTaskDown(index)}>
          &#8595;
          </button>
        </li>
        )}
      </ol>
    </div>
  );
};

export default ToDoList;

