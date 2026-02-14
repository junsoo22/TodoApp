import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoItems, setTodoItems }) {
  return (
    <div>
      <div>
        {todoItems.map((item) => {
          return (
            <TodoItem
              item={item}
              id={item.id}
              todoItems={todoItems}
              setTodoItems={setTodoItems}
            ></TodoItem>
          );
        })}
      </div>
    </div>
  );
}
