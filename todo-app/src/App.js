import React, { useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [listTodo, setListTodo] = useState([]);
  const [todoId, setTodoId] = useState(null);

  let addList = () => {
    if (inputText !== "") {
      setListTodo([inputText, ...listTodo]);
    }
    setInputText("");
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  const handleClearClick = () => {
    let newText = "";

    setInputText(newText);
    setListTodo([]);
  };

  const handleOnChange = (event) => {
    setInputText(event.target.value);
  };
  const editListItem = (key, item) => {
    setIsEdit(true);
    setInputText(item);
    setTodoId(key);
  };
  const handleCheckClick = () => {
    let newListTodo = [...listTodo];
    newListTodo.splice(todoId, 1, inputText);
    setListTodo([...newListTodo]);
    setInputText("");
    setIsEdit(false);
  };
  const handleCrossClick = () => {
    setInputText("");
    setIsEdit(false);
  };

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <h1 className="app-heading">TODO APP</h1>
          <TodoInput
            handleChange={handleOnChange}
            addList={addList}
            inputValue={inputText}
            isEdit={isEdit}
            handleCheckClick={handleCheckClick}
            handleCrossClick={handleCrossClick}
          />

          {listTodo.map((listItem, i) => {
            return (
              <TodoList
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteListItem}
                editItem={editListItem}
              />
            );
          })}
          <div className="footer">
            <span>
              <span className="pendingTasks"></span> you have pending tasks
            </span>
            <button onClick={handleClearClick}>Clear All</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
