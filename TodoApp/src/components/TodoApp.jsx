import React from "react";

export default function TodoApp() {
  const colors = ["white", "red", "yellow", "pink"];

  return (
    <div style={{ backgroundColor: "blue" }}>
      <h1 style={{ textAlign: "center" }}>Todo App</h1>

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
