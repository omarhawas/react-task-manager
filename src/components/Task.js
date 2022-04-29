import { FaTimes } from "react-icons/fa";

const Task = ({ task, callDelete, callToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => callToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes onClick={() => callDelete(task.id)} style={{ color: "red" }} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
