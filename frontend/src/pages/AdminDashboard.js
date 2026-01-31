import api from "../api";
import { useEffect, useState } from "react";
import IssueCard from "../components/IssueCard";

function AdminDashboard(){

 const [issues,setIssues]=useState([]);

 useEffect(()=>{
  load();
 },[]);

 const load=()=>{
  api.get("issues/list/")
  .then(res=>setIssues(res.data));
 }

 const resolve=async(id)=>{
  await api.put(`issues/update/${id}/`,
    {status:"Resolved",assigned_to:"Caretaker"});
  load();
 }

 return(
  <div className="container">
   <h2>All Issues</h2>

   {issues.map(i=>(
     <IssueCard key={i.id} issue={i} onResolve={resolve}/>
   ))}
  </div>
 )
}

export default AdminDashboard;
