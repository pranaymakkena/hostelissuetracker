import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Select Role</h2>

      <button onClick={()=>navigate("/student")}>
        Student
      </button>

      <button onClick={()=>navigate("/admin")}>
        Management
      </button>
    </div>
  );
}

export default Login;
