import api from "../api";
import { useState } from "react";

function Register() {

  const [data,setData]=useState({});

  const submit=async()=>{
    await api.post("users/register/",data);
    alert("Registered");
  }

  return (
    <div className="container">
      <h2>Register</h2>

      <input placeholder="username"
        onChange={e=>setData({...data,username:e.target.value})}/>

      <input placeholder="password"
        onChange={e=>setData({...data,password:e.target.value})}/>

      <select onChange={e=>setData({...data,role:e.target.value})}>
        <option>STUDENT</option>
        <option>MANAGEMENT</option>
      </select>

      <input placeholder="hostel"
        onChange={e=>setData({...data,hostel:e.target.value})}/>

      <input placeholder="block"
        onChange={e=>setData({...data,block:e.target.value})}/>

      <input placeholder="room"
        onChange={e=>setData({...data,room:e.target.value})}/>

      <button onClick={submit}>Register</button>
    </div>
  );
}

export default Register;
