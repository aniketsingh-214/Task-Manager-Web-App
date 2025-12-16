import { useState } from "react";
import API from "../api/taskApi";

export default function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title) return;

    await API.post("/tasks", { title });
    setTitle("");
    refresh();
  };

  return (
    <form onSubmit={submitHandler} className="flex gap-3 mb-6">
      <input
        className="
        flex-1
        rounded-lg
        border
        border-gray-300
        px-4
        py-2
        text-sm
        outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-blue-500
        placeholder-gray-400
      "
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        className="
        rounded-lg
        bg-blue-600
        px-5
        py-2
        text-sm
        font-medium
        text-white
        hover:bg-blue-700
        transition
      "
      >
        Add
      </button>
    </form>
  );
}
