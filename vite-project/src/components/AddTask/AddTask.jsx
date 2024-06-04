import { useState } from "react";
import "./AddTask.css";
import { nanoid } from "nanoid";

const AddTask = ({ setTasks = () => {}, tasks = [] }) => {
  const [InputValue, SetInputValue] = useState("");

  return (
    <div>
      <input
        className="input-task"
        type="text"
        placeholder="inserisci la tua task"
        onChange={(e) => {
          SetInputValue(e.target.value);
        }}
      />
      <button
        className="button-task"
        type="button"
        onClick={() => {
          setTasks([...tasks, { id: nanoid(), text: InputValue }]);
        }}
      >
        insert
      </button>
    </div>
  );
};
export default AddTask;
