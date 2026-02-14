import React from "react";

export default function ColorBar({ colors, handleBgColor }) {
  return (
    <div>
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
    </div>
  );
}
