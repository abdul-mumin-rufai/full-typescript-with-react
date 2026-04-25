import { useState } from "react"
import {type Task } from "./types";

type TaskProp = {
    addTask: (task: Task) => void;
};

const Form = ({addTask}:TaskProp) => {
    const [text, setText] = useState('');


    // we must set the type for the e ie the event
    const handleSumbit = (e:React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        if (!text) {
            alert('please enter a text value')
            return;
        }
        // add tasks
        addTask({
            id: new Date().getDate().toString(),
            description: text,
            isComplete:false,
        });
    
        setText('');
    };

  return (
      <section>
          <form className="form task-form" onSubmit={handleSumbit}>
              <input
                  type="text"
                  name="form-input"
                  value={text}
                  onChange={(e) => { setText(e.target.value) }} // we didn't provide the type here because typescript an infer inline passing
              />
              <button type="submit" className="btn">add task</button>
          </form>
    </section>
  )
}

export default Form;