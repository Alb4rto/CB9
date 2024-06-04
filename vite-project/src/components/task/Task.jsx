import "./Task.css";

const Task = ({ textProp, handleClick }) => {
  return (
    <li className="task">
      <span className="Xbutton" onClick={handleClick}>
        X
      </span>{" "}
      {textProp}
    </li>
  );
};

export default Task;
