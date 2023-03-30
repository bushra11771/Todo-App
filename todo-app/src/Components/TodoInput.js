import React from "react";

function TodoInput(props) {
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList();
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={props.inputValue}
        onChange={props.handleChange}
        onKeyDown={handleEnterPress}
      />
      {props.isEdit === true ? (
        <>
          <button className="check" onClick={props.handleCheckClick}>
            <i class="fa-solid fa-check"></i>
          </button>
          <button className="xmark" onClick={props.handleCrossClick}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </>
      ) : (
        <button onClick={props.addList}>
          <i className="fas fa-plus"></i>
        </button>
      )}
    </div>
  );
}

export default TodoInput;
