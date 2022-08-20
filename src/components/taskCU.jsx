import React from "react";

const TaskAdd = ({ value, placeholder, changeHandler, clickHandler }) => {
  return (
    <div className="row">
      <div className="col">
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={value}
              onChange={changeHandler}
              placeholder={placeholder}
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-primary mb-2"
                type="button"
                onClick={clickHandler}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { TaskAdd };
