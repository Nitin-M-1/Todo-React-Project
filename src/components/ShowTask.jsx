import { useState } from "react";
import "./ShowTask.css";
export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  function taskName(name) {
    if (name.length > 20) {
      return name.slice(0, 20) + "...";
    } else {
      return name;
    }
  }
  const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
  };
  const handlDetele = (id) => {
    const updatedTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTaskList);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div className="head-title">
          <span className="title">TODO</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button
          className="clearAll"
          onClick={() => {
            setTaskList([]);
          }}
        >
          Clear All
        </button>
      </div>
      <hr className="head-end-line" />
      <ul className="task-list">
        {taskList.map((todo) => (
          <li className="my-task" key={todo.id}>
            <p className="task-info">
              <span className="name">{taskName(todo.name)}</span>
              <span className="time">{todo.time}</span>
            </p>
            <p className="icon-box">
              <i
                onClick={() => handleEdit(todo.id)}
                className="bx bx-edit-alt edit-task"
              ></i>
              <i
                onClick={() => handlDetele(todo.id)}
                className="bx bx-trash delete-task"
              ></i>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
