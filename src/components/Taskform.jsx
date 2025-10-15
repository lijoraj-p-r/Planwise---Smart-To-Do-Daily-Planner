import { useState } from "react"

export default function Taskform({addTask}) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('General');

  const handlesubmit = (e) => {
    e.preventDefault();
    addTask({text: task, priority, category, completed: false});

    //reset
    setTask('');
    setPriority("medium");
    setCategory("General");
  }

  return (
      <form onSubmit={handlesubmit} id='task-form'> 
        <div id="inp">
          <input type='text' placeholder='Enter the task'
           value={task}
          onChange={(e)=> setTask(e.target.value)}/>
          <button type="submit">Add task</button>
        </div>

      <div id='btns'>
      <select value={priority} onChange={(e)=> setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="low">low</option>
      </select>

      <select value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="general">General</option>
        <option value="work">work</option>
        <option value="personal">personal</option>
      </select>
      </div>

      {/* <h1>{task} {priority} {category}</h1> */}
   </form>

  )
}
