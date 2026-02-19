import React , {useState} from "react";
import InfoCard from "./InfoCard";
function TaskManager(){
  const [task, setTask] = useState("Complete React Lab");
  const updateTask = () => {
    setTask("Prepare Advance React Notes");
  };
  return (
    <div style ={{
      border : "2px solid #444",
      padding : "15px",
      margin : "10px",
      borderRadius : "8px",
      backgroundColor : "#f4f4f4"
    }}>
      <h2>Hello</h2>{
        <InfoCard
      title = "Task Manager"
    content = {`Current Task : ${task}`}
  />}
  <button onClick = {updateTask}>
    Change Task
  </button>
    </div>
  );

}

export default TaskManager;