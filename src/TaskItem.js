import React from 'react';
import './App.css';

function TaskItem({ task, index, handleComplete, handleDelete, setEditingTaskIndex, setValue }) {
  return (
    <div className={`task ${task.completed ? "task-completed" : ""}`}>
      <input
        type="checkbox"
        className="checkbox"
        checked={task.completed}
        onChange={() => handleComplete(index)}
      />
      <span className="task-text">{task.text}</span>
      <div className="task-buttons">
        <button className='edit-btn' onClick={() => { setEditingTaskIndex(index); setValue(task.text); }}>Edit</button>
        <button className='delete-btn' onClick={() => handleDelete(index)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
