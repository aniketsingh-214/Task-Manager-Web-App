import API from "../api/taskApi";

export default function TaskList({ tasks, refresh }) {
  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    refresh();
  };

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="
          flex
          items-center
          justify-between
          rounded-lg
          bg-white
          p-4
          shadow-sm
          hover:shadow-md
          transition
        "
        >
          <span className="text-sm text-gray-800">{task.title}</span>

          <button
            onClick={() => deleteTask(task._id)}
            className="
            text-sm
            font-medium
            text-red-500
            hover:text-red-600
            transition
          "
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
