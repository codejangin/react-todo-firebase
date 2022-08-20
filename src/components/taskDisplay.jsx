import React from "react";

const TaskDisplay = ({ tasks, deleteHandler }) => {
  const taskDisplay = tasks.map((task) => {
    // console.log(task);
    return (
      <li className="list-group-item" key={task.id}>
        {task.todo}
        <div className="float-right">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteHandler(task.id)}
          >
            Delete
          </button>
        </div>
      </li>
    );
  });

  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">{taskDisplay}</ul>
      </div>
    </div>
  );
};

export default TaskDisplay;
