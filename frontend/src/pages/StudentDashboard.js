import api from "../api";
import { useEffect, useState } from "react";
import IssueCard from "../components/IssueCard";

function StudentDashboard(){

 const [issues,setIssues]=useState([]);

 useEffect(()=>{
  api.get("issues/list/")
  .then(res=>setIssues(res.data));
 },[]);

 return(
  <div className="container">
   <h2>My Issues</h2>

   {issues.map(i=>(
     <IssueCard key={i.id} issue={i}/>
   ))}
  </div>
 )
}

export default StudentDashboard;
