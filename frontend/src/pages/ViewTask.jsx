import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/tasks/${id}`)
      .then((res) => setTask(res.data))
      .catch((err) => console.error("View failed", err));
  }, [id]);

  if (!task) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow p-6 mt-10 rounded">
      <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Assigned To:</strong> {task.assignedTo}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Deadline:</strong> {task.deadline?.substring(0, 10)}</p>
    </div>
  );
};

export default ViewTask;
