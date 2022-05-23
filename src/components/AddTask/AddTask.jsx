import React, { useState } from "react";
import styles from "./addTask.module.css";
const AddTask = ({ addTask }) => {
  const [newTodo, setnewTodo] = useState("");

  const handleClick = () => {
    addTask(newTodo);
    setnewTodo("");
  };

  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        value={newTodo}
        placeholder="Add task..."
        onChange={({ target }) => setnewTodo(target.value)}
      />
      <button data-cy="add-task-button" onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default AddTask;
