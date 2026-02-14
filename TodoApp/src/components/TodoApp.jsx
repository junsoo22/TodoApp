import React, { useState } from "react";

export default function TodoApp() {
  const [input, setInput] = useState(""); //입력창
  const [todoList, setTodoList] = useState([]); //todo items
  const [bgColor, setBgColor] = useState("white");

  const colors = ["white", "red", "yellow", "pink"];

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleBgColor = (c) => {
    setBgColor(c);
  };
  return (
    <div style={{ backgroundColor: "blue" }}>
      <h1 style={{ textAlign: "center" }}>Todo App</h1>

      {/* input */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          style={{ width: "600px", height: "30px", backgroundColor: bgColor }}
          onChange={handleInput}
        />

        <button>입력</button>
      </div>

      {/* ColorBar */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              backgroundColor: color,
              width: "20px",
              height: "20px",
              borderRadius: "100px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              handleBgColor(color);
            }}
          />
        ))}
      </div>
      <h2 style={{ textAlign: "center" }}>Todo Items</h2>
      {/* TodoList */}
      <div>
        <section
          style={{
            backgroundColor: "pink",
            marginBottom: "10px",
            borderRadius: "5px",
            marginLeft: "50px",
            marginRight: "50px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          공부하기
          <div>
            <button style={{ margin: "10px" }}>수정</button>
            <button>삭제</button>
          </div>
        </section>
        <section
          style={{
            backgroundColor: "yellow",
            marginBottom: "10px",
            borderRadius: "5px",
            marginLeft: "50px",
            marginRight: "50px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          잠자기
          <div>
            <button style={{ margin: "10px" }}>수정</button>
            <button>삭제</button>
          </div>
        </section>
        <section
          style={{
            backgroundColor: "red",
            marginBottom: "10px",
            borderRadius: "5px",
            marginLeft: "50px",
            marginRight: "50px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          밥먹기
          <div>
            <button style={{ margin: "10px" }}>수정</button>
            <button>삭제</button>
          </div>
        </section>
      </div>
    </div>
  );
}
