import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(); // set logged in = true
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;