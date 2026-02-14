import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoItems }) {
  return (
    <div>
      <div>
        {todoItems.map((item) => {
          return <TodoItem item={item}></TodoItem>;
        })}
      </div>
    </div>
  );
}
