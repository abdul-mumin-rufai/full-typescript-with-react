import Form from "./form";
import List from "./list";
import { useState } from "react";
import { type Task } from "./types";

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task): void => { 
    setTasks([...tasks, task])
  };
  console.log(tasks);
  
  
  return (
    <section>
      <Form addTask={addTask}/>
      <List/>
    </section>
  );
}
export default Component;
