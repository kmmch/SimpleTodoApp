import React from "react";

const style = {
  width: "400px",
  margin: "8px",
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: "#c6ffe2",
  minHeight: "200px"
};

/**
 * 未完了TODOエリアのコンポーネント
 */
export const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div style={style}>
      <h2 className="area__ttl">未完了のTODO</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p className="todo__ttl">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
