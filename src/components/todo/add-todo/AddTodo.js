import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");
  const keyDown = (e) => {
    if (e.key === "Enter") {
      console.log("True");
    }
  };
  return (
    <>
      <div className="moviesSearch">
        <input
          type="text"
          className="form-control"
          placeholder="Add Here"
          autoComplete="off"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          value={inputText}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            addTodo(inputText);
            setInputText("");
          }}
        >
          ADD
        </button>
      </div>
    </>
  );
};

export default AddTodo;
