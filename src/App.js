import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Button from "./components/Button";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctors Appointment", day: "Feb 5th", reminder: true },
    { id: 2, text: "Meeting at school", day: "Feb 6th", reminder: true },
    { id: 3, text: "Food shopping", day: "Feb 5th", reminder: false },
  ]);

  const isDuplicate = (newTask) => {
    return tasks.some((task) => {
      return (
        task.text.toLowerCase() === newTask.text.toLowerCase() &&
        task.day.toLowerCase() === newTask.day.toLowerCase()
      );
    });
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask isDuplicate={isDuplicate} onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
      <Button
        btnClassName="clear-btn"
        color="red"
        text="Clear All"
        onClick={clearAll}
      />
    </div>
  );
}

export default App;
