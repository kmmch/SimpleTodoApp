import React from "react";

const style = {
  width: "400px",
  margin: "8px",
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: "#c1ffff",
  height: "30px"
};

/**
 * 入力エリアのコンポーネント
 */
export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
