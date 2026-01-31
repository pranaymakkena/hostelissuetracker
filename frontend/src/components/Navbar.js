import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{background:"#1976d2",padding:"10px"}}>
      <Link to="/" style={{color:"white",marginRight:"10px"}}>Login</Link>
      <Link to="/register" style={{color:"white",marginRight:"10px"}}>Register</Link>
      <Link to="/report" style={{color:"white"}}>Report</Link>
    </div>
  );
}

export default Navbar;
