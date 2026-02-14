import React, { useState } from "react";

export default function TodoItem({ item, id, todoItems, setTodoItems }) {
  //삭제 버튼 누를 시, 상태 변화
  const removeItems = () => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <section
        style={{
          backgroundColor: item.color,
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
        {item.text}
        <div>
          <button style={{ margin: "10px" }}>수정</button>
          <button onClick={removeItems}>삭제</button>
        </div>
      </section>
    </div>
  );
}
