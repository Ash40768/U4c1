import React from "react";
import { Task } from "../Task";

import styles from "./tasks.module.css";

const Tasks = ({ tasks, handleUpdate, handleRemove }) => {
  if (tasks.length > 0) {
    return (
      <ul data-cy="tasks" className={styles.tasks}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleUpdate={handleUpdate}
            handleRemove={handleRemove}
          />
        ))}
      </ul>
    );
  }
  return (
    <div data-cy="empty" className={styles.empty} >
      {/* <img src={empty} alt="empty task list" /> */}
      <p>
        <b>Empty list</b>
      </p>
      <p>Add a new task above</p>
    </div>
  );
};

export default Tasks;
