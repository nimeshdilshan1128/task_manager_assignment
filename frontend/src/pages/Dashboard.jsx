import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Task Manager</h1>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded shadow text-center">
            <p className="text-sm text-gray-500">Total Tasks</p>
            <h2 className="text-xl font-semibold">10</h2>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow text-center">
            <p className="text-sm text-gray-500">Pending</p>
            <h2 className="text-xl font-semibold">4</h2>
          </div>
          <div className="bg-green-100 p-4 rounded shadow text-center">
            <p className="text-sm text-gray-500">Completed</p>
            <h2 className="text-xl font-semibold">6</h2>
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            to="/tasks"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Tasks
          </Link>
          <Link
            to="/tasks/add"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add New Task
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
