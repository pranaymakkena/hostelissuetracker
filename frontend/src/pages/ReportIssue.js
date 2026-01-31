import api from "../api";
import { useState } from "react";

function ReportIssue(){

 const [form,setForm]=useState({});

 const submit=async()=>{

  const fd=new FormData();
  Object.keys(form).forEach(k=>fd.append(k,form[k]));

  await api.post("issues/create/",fd);

  alert("Issue submitted");
 }

 return(
  <div className="container">
   <h2>Report Issue</h2>

   <input placeholder="category"
     onChange={e=>setForm({...form,category:e.target.value})}/>

   <input placeholder="priority"
     onChange={e=>setForm({...form,priority:e.target.value})}/>

   <textarea placeholder="description"
     onChange={e=>setForm({...form,description:e.target.value})}/>

   <input type="file"
     onChange={e=>setForm({...form,image:e.target.files[0]})}/>

   <button onClick={submit}>Submit</button>
  </div>
 )
}

export default ReportIssue;
