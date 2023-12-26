import React from "react";
import { useSelector } from "react-redux";
export const Navbar = () => {

  const {tasks} = useSelector((state)=> state);
  // console.log(tasks);
  const pending = tasks.filter((task)=> !task.status).length;
  console.log(pending);

  const completed = tasks.filter((task)=> task.status).length;
  console.log(completed);
  const totalcount = tasks.length;


  return (
    <div
      style={{
        border: "1px solid black",
        height: "fit-content",
        display: "flex",
        padding: "0.5rem",
      }}
    >
      <div style={{ flex: "1" }}>
        <div>Pending Tasks</div>
        <div data-testid="pending-task-count">{pending}</div>
      </div>

      <div style={{ flex: "1" }}>
        <div>Completed Tasks</div>
        <div data-testid="completed-task-count">{completed}</div>
      </div>

      <div style={{ flex: "1" }}>
        <div>Total Tasks</div>
        <div data-testid="total-tasks-count">{totalcount}</div>
      </div>

      <div style={{ display: "flex" }}>
        <button data-testid="add-task">Add Task</button>
      </div>
    </div>
  );
};
