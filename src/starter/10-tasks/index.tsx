import Form from "./form";
import List from "./list";
import { useState } from "react";
import { type Task } from "./types";

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task): void => { 
    setTasks([...tasks, task])
  };

  const toggleTasks = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete }
        }
        return task;
      })
    )
  };
  
  return (
    <section>
      <Form addTask={addTask}/>
      <List tasks={ tasks} toggleTasks={toggleTasks} />
    </section>
  );
}
export default Component;
