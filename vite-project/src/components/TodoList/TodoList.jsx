import "./TodoList.css";
import Task from "../task/Task.jsx";

const TodoList = ({ tasks = [], setTasks }) => {
  const deleteButton = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          textProp={task.text}
          handleClick={() => deleteButton(task.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
