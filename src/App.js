import React, { useState } from "react";
import './App.css';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const temp=value.trim();
    if(!temp)
    {
       alert("Task Cannot be Empty!");
       return ;
    }
    if (editingTaskIndex !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editingTaskIndex ? { ...task, text: value } : task
      );
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
    } 
    else {
      setTasks([...tasks, { text: value, completed: false }]);
    }
    setValue("");
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="input"
          type="text"
          placeholder="What are you planning today?"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">{editingTaskIndex !== null ? "Edit" : "Submit"}</button>
      </form>
      <TaskList tasks={tasks} setTasks={setTasks} setEditingTaskIndex={setEditingTaskIndex} setValue={setValue} />
    </div>
  );
}

export default App;
