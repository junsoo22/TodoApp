import React, { useState } from "react";

export default function TodoItem({ item, id, todoItems, setTodoItems }) {
  // 1. 수정을 클릭하면 input태그로 변환
  // 2. input태그의 기본값은 현재 todo.text이다.
  // 3. input값이 입력되면, 해당 input값을 추적한다?
  // 4. 수정버튼을 누르면 바뀐 input값으로 업데이트한다.

  const [fixedInput, setFixedInput] = useState(item.text); //수정할 때 입력
  const [isFixed, setIsFixed] = useState(false); //수정 버튼 클릭 상태

  //삭제 버튼 누를 시, 상태 변화
  const removeItems = () => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  const handleFixedInput = (e) => {
    setFixedInput(e.target.value);
  };

  const handleIsFixed = () => {
    if (isFixed) {
      // 저장: todoitems 배열에서 해당 아이템의 text를 수정된 값으로 업데이트
      setTodoItems(
        todoItems.map((i) => (i.id === id ? { ...i, text: fixedInput } : i)),
      );
    }
    setIsFixed((prev) => !prev);
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
        {isFixed ? (
          <input type="text" value={fixedInput} onChange={handleFixedInput} />
        ) : (
          item.text
        )}
        <div>
          {!isFixed ? (
            <button style={{ margin: "10px" }} onClick={handleIsFixed}>
              수정
            </button>
          ) : (
            <button style={{ margin: "10px" }} onClick={handleIsFixed}>
              저장
            </button>
          )}
          <button onClick={removeItems}>삭제</button>
        </div>
      </section>
    </div>
  );
}
