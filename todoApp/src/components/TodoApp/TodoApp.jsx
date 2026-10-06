import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoApp.module.css";

function TodoApp() {
  // Initial state matches the reference requirement directly
  const [todos, setTodos] = useState([
    { id: 1, title: "Read Blog", updatedCount: 0 },
    { id: 2, title: "Write code", updatedCount: 2 },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    // Checks for space and trailing number (e.g., "Make Food 3")
    const match = trimmed.match(/^(.*?)(?:\s+(\d+))$/);

    let title = trimmed;
    let count = 1;

    if (match) {
      title = match[1].trim();
      count = parseInt(match[2], 10);
    }

    const newTodos = Array.from({ length: count }, () => ({
      id: Date.now() + Math.random(),
      title: title,
      updatedCount: 0,
    }));

    setTodos((prev) => [...prev, ...newTodos]);
    setInputValue("");
  };

  const handleUpdate = (id, newTitle) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const isChanged = item.title !== newTitle;
          return {
            ...item,
            title: newTitle,
            updatedCount: isChanged ? item.updatedCount + 1 : item.updatedCount,
          };
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.todoPage}>
      <div className={styles.todoPanel}>
        <h1 className={styles.todoHeading}>What's the Plan for Today?</h1>

        <form onSubmit={handleAdd} className={styles.todoForm}>
          <input
            type="text"
            className={styles.todoInput}
            placeholder="Add a todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className={styles.addBtn}>
            Add Todo
          </button>
        </form>

        <div className={styles.todoStack}>
          {todos.map((item, index) => (
            <TodoItem
              key={item.id}
              todo={item}
              index={index}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;