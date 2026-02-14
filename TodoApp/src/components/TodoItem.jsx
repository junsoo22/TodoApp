import React from "react";

export default function TodoItem({ item }) {
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
          <button>삭제</button>
        </div>
      </section>
    </div>
  );
}
