import React from "react";

const TodoList = ({ data }) => {
  const { listTodo, removeTodo } = data;
  return (
    <>
      {listTodo.length > 0 ? (
        <div className="card">
          <div className="card-body">
            <div className="todoList">
              <ul>
                {listTodo.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="text">{item}</div>
                      <div className="remove">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            removeTodo(index);
                          }}
                        >
                          X
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TodoList;
