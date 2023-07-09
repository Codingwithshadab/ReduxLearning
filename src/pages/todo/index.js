import React, { useEffect } from "react";
import Todo from "../../components/todo/Todo";

const TodoPage = ({ setCommon }) => {
  useEffect(() => {
    setCommon(true);
  }, []);
  return (
    <>
      <Todo />
    </>
  );
};

export default TodoPage;
