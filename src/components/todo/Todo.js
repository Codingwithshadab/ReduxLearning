import React, { useState } from "react";
import AddTodo from "./add-todo/AddTodo";
import TodoList from "./todo-list/TodoList";

const Todo = () => {
    const [listTodo, setListTodo] = useState([]);
    const addTodo = (inputText) => {
        setListTodo([...listTodo, inputText]);
        
    }
    const removeTodo = (index) => {
       let newTodo = [...listTodo];
       newTodo.splice(index, 1);
       setListTodo([...newTodo])       
    }
  return (
    <>
      <section className="todoSec sectionSpace">
        <div className="container">
          <div className="sectionTitle">
            <h6 className="text-danger">Add Today list</h6>
            <h3>Todo List</h3>
          </div>
          <AddTodo addTodo={addTodo} />
          {/* <div className="list">
            <ul>
                <li id="dropdownList">
                    <a href="#">Dropdown</a>
                    <div className="dropdownMenu">
                        <ul>
                            <li>Hello1</li>
                            <li>Hello2</li>
                            <li>Hello3</li>
                        </ul>
                    </div>

                </li>
            </ul>
          </div> */}
          <TodoList data={{listTodo, removeTodo}} />

          
        </div>
      </section>
    </>
  );
};

export default Todo;
