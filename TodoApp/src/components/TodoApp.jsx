import React, { useState } from "react";
import TodoInput from "./TodoInput";
import ColorBar from "./ColorBar";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [input, setInput] = useState(""); //입력창
  const [todoItems, setTodoItems] = useState([]); //todo items
  const [bgColor, setBgColor] = useState("white");

  const colors = ["white", "red", "yellow", "pink"];

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleBgColor = (c) => {
    setBgColor(c);
  };

  //todoList의 todo item은 input text 값과 color값을 객체로 가져야함
  const addItem = () => {
    setTodoItems([
      ...todoItems,
      { id: Date.now(), text: input, color: bgColor },
    ]);
  };

  return (
    <div style={{ backgroundColor: "blue", minHeight: "45vh" }}>
      <h1 style={{ textAlign: "center" }}>Todo App</h1>

      {/* input */}
      <TodoInput
        onChange={handleInput}
        addItem={addItem}
        bgColor={bgColor}
        input={input}
      ></TodoInput>

      {/* ColorBar */}
      <ColorBar colors={colors} handleBgColor={handleBgColor}></ColorBar>

      <h2 style={{ textAlign: "center" }}>Todo Items</h2>

      {/* TodoList */}
      <TodoList todoItems={todoItems}></TodoList>
    </div>
  );
}
