import React from "react";

function TodoList(props) {
  return (
    <>
      <li className="list-item">
        <label className="checkbox">
          <input type="checkbox" />
        </label>
        <span
          style={{
            width: 300,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.item}
        </span>
        <span className="icons">
          <i
            className="fa-solid fa-trash-can icon-delete"
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square"
            onClick={(e) => {
              props.editItem(props.index, props.item);
            }}
            // onClick={props.editItem(props.index)}
          ></i>
        </span>
      </li>
    </>
  );
}

export default TodoList;
