import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import ColorBar from "./ColorBar";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [input, setInput] = useState(""); //입력창

  //변경(새로고침) 후 : localstorage에서 불러오기
  const [todoItems, setTodoItems] = useState(() => {
    const saved = localStorage.getItem("todoList");
    return saved ? JSON.parse(saved) : [];
  }); //todo items
  const [bgColor, setBgColor] = useState("white");
  const [searchInput, setSearchInput] = useState("");

  const colors = ["white", "red", "yellow", "pink"];

  const filterdItems = todoItems.filter((item) => item.text === searchInput);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleBgColor = (c) => {
    setBgColor(c);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  //todoList의 todo item은 input text 값과 color값을 객체로 가져야함
  const addItem = () => {
    setTodoItems([
      ...todoItems,
      { id: Date.now(), text: input, color: bgColor },
    ]);
  };

  //todo item 추가될때마다 local storage에 item 넣어주기
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoItems));
  }, [todoItems]);

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
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <input
          type="text"
          placeholder="검색어 입력"
          onChange={handleSearchInput}
        />
      </div>

      {/* TodoList */}
      <TodoList todoItems={searchInput ? filterdItems : todoItems}></TodoList>
    </div>
  );
}
