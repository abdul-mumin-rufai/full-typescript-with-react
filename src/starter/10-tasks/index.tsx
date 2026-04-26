import Form from "./form";
import List from "./list";
import { useState, useEffect } from "react";
import { type Task } from "./types";

function Component() {
  const updateTasks = (tasks:Task[]): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const loadTasks = () => { 
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  const [tasks, setTasks] = useState<Task[]>(()=>loadTasks());

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
  useEffect(() => {
    updateTasks(tasks)
  },[tasks])
  
  return (

    <section>
      <Form addTask={addTask}/>
      <List tasks={ tasks} toggleTasks={toggleTasks} />
    </section>
  );
}
export default Component;
