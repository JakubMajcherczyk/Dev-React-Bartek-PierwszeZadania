import { useState } from "react";
import styles from "./Todo.module.scss";
import tasksData from "./tasks.json";

function TodoList() {
  const tasks = tasksData.todoData;

  // Hook do przechowywania stanu zaznaczenia
  const [checked, setChecked] = useState(tasks);

  // Funkcja do zmiany stanu zaznaczenia po id zadania
  function handleChange(id) {
    // Aktualizujemy stan, zmieniając wartość completed dla zadania o podanym id
    setChecked(
      checked.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className={styles.todoList}>
      {checked.map((todo) => (
        <Todo
          key={todo.id}
          name={todo.name}
          completed={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
      ))}
    </div>
  );
}

function Todo({ name, completed, onChange }) {
  return (
    <div className={styles.todo}>
      <input type="checkbox" checked={completed} onChange={onChange} />
      <span className={completed ? styles.done : ""}>{name}</span>
    </div>
  );
}

export default TodoList;
