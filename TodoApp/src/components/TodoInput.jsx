import React from "react";

export default function TodoInput({ onChange, addItem, bgColor, input }) {
  return (
    <div>
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
          onChange={onChange}
          value={input}
        />

        <button onClick={addItem}>입력</button>
      </div>
    </div>
  );
}
