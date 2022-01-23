import React from "react";

const style = {
  width: "400px",
  margin: "8px",
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: "#ffffe0",
  minHeight: "200px"
};

/**
 * 完了TODOエリアのコンポーネント
 */
export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={style}>
      <h2 className="area__ttl">完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p className="todo__ttl">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
