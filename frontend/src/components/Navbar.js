import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/report">Report Issue</Link>
      <Link to="/student">Dashboard</Link>
    </div>
  );
}

export default Navbar;
