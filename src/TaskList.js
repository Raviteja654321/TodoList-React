import React from 'react';
import TaskItem from './TaskItem';
import './App.css';

function TaskList({ tasks, setTasks, setEditingTaskIndex, setValue }) {
  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleComplete(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          setEditingTaskIndex={setEditingTaskIndex}
          setValue={setValue}
        />
      ))}
    </div>
  );
}

export default TaskList;
