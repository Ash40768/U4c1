import React from "react";
import { v4 } from "uuid";
import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";

import styles from "./taskApp.module.css";

const TaskApp = ({ data }) => {
  const [tasks, setTasks] = React.useState(data);

  const addTask = (newTodo) => {
    if (newTodo && !tasks.some((task) => task.text === newTodo)) {
      const newTodoObj = {
        id: v4(),
        text: newTodo,
        done: false,
        count: 1,
      };
      setTasks([...tasks, newTodoObj]);
    }
  };

  const handleRemove = (taskId) => {
    let newTodos = tasks.filter((task) => task.id !== taskId);
    console.log(newTodos);
    setTasks(newTodos);
  };

  const handleUpdate = (updatedTask) => {
    let newTodos = tasks.reduce((acc, crr) => {
      if (crr.id === updatedTask.id) {
        acc.push(updatedTask);
      } else {
        acc.push(crr);
      }
      return acc;
    }, []);
    setTasks([...newTodos]);
  };

  return (
    <div data-cy="task-app" className={styles.main}>
      <div className={styles.taskApp}>
        <TaskHeader tasks={tasks} />
        <AddTask addTask={addTask} />
        <div className={styles.taskBody}>
          <Tasks
            tasks={tasks}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
