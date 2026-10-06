import React, { useState } from "react";
import styles from "./TodoItem.module.css";

function TodoItem({ todo, index, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const handleSave = () => {
    const trimmed = editText.trim();
    if (!trimmed) return;
    onUpdate(todo.id, trimmed);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.title);
    setIsEditing(false);
  };

  return (
    <div
      className={`${styles.todoRow} ${
        index % 2 === 0 ? styles.cyanRow : styles.orangeRow
      }`}
    >
      {isEditing ? (
        <div className={styles.editBox}>
          <input
            type="text"
            className={styles.editInput}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
          <button className={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span className={styles.todoTitle}>
            {todo.title} (Updated {todo.updatedCount}{" "}
            {todo.updatedCount === 1 ? "Time" : "Times"})
          </span>
          <div className={styles.actionIcons}>
            {/* Delete: Circled X Icon */}
            <button
              className={styles.iconBtn}
              onClick={() => onDelete(todo.id)}
              title="Delete"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </button>
            {/* Edit: Square Pencil Icon */}
            <button
              className={styles.iconBtn}
              onClick={() => setIsEditing(true)}
              title="Edit"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;