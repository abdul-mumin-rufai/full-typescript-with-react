import { type Task } from "./types";

interface ListProp { 
    tasks: Task[];
    toggleTasks: ({ id }: { id: string }) => void;
};

const List = ({tasks, toggleTasks}: ListProp) => {
  return (
      <ul className="list">
          {tasks.map((task) => {
              return (
                  <li key={task.id}>
                      <p className="task-text">{task.description}</p>
                      <input
                          type="checkbox"
                          checked={task.isComplete}
                          onChange={() => toggleTasks({ id: task.id })}
                      />
                  </li>
              )
          })}
          
    </ul>
  )
}

export default List