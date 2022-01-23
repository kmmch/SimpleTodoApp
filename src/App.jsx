import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  // 入力されたテキスト
  const [todoText, setTodoText] = useState("");

  // 未完了のTODO
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了のTODO
  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力されたテキストをテキストボックスに反映する
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン押された時の処理
  const onClickAdd = () => {
    // 何も入力されずに追加ボタンを押されたときは、TOODに追加する処理をスキップする
    if (todoText === "") return;

    // 現時点での未完了のTODOに新しく入力したTODOを追加する
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタン押された時の処理
  const onClickDelete = (index) => {
    // 現時点の未完了TODOを取得
    const newTodos = [...incompleteTodos];

    // 未完了のTODOのindex番目を１つ削除する
    newTodos.splice(index, 1);

    // 未完了TODOの更新
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン押された時の処理
  const onClickComplete = (index) => {
    // 現時点の未完了TODOを取得
    const newIncompleteTodos = [...incompleteTodos];

    // 未完了のTODOのindex番目を１つ削除する
    newIncompleteTodos.splice(index, 1);

    // 現時点の完了のTODOに、完了ボタンが押された未完了のTOODのindex番目のTODOを追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    // 未完了TODOの更新
    setIncompleteTodos(newIncompleteTodos);

    // 完了TODOの更新
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタン押された時の処理
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは5個までです。</p>
      )}
      <IncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
