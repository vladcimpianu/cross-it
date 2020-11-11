import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { Form, TodoList } from "./";
import "./Reminders.css";

export const Reminders = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <Container>
      <header>
        <h1>Reminders page</h1>
        <div>{inputText}</div>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList />
    </Container>
  );
};
