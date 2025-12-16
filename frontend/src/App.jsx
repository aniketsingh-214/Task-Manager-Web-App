import { useEffect, useState } from "react";
import API from "./api/taskApi";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const res = await API.get("/tasks");
        setTasks(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center">
      <div
        className="
        mt-16
        w-full
        max-w-md
        rounded-xl
        bg-white
        p-6
        shadow-lg
      "
      >
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          📝 Task Manager
        </h1>

        <TaskForm refresh={fetchTasks} />
        <TaskList tasks={tasks} refresh={fetchTasks} />
      </div>
    </div>
  );
}
