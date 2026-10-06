import React, { useState } from "react";
import TodoApp from "./components/TodoApp/TodoApp";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import styles from "./App.module.css";

function App() {
  const [activeTab, setActiveTab] = useState("task1");

  return (
    <div className={styles.mainWrapper}>
      <nav className={styles.tabNav}>
        <button
          className={`${styles.tabBtn} ${activeTab === "task1" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("task1")}
        >
          Task 1: Todo App
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "task2" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("task2")}
        >
          Task 2: Product Catalog
        </button>
      </nav>

      <main>
        {activeTab === "task1" ? <TodoApp /> : <ProductCatalog />}
      </main>
    </div>
  );
}

export default App;