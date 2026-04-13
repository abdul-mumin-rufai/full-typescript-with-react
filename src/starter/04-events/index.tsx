import React, { useState } from "react";

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  interface EventPerson { name:string};

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  } // but we have to explicity set the type if we use a function as reference

  // handling form data
  const handleForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //const formData = new FormData(e.currentTarget);
    const formData = new FormData(e.target as HTMLFormElement);
    //const data = Object.fromEntries(formData);
    //console.log(data);
    const getText = formData.get('email') as string; // gocha getting the form data can be null so we use type assertion
    const eventPerson: EventPerson = { name: getText };
    console.log(eventPerson);
    
  }

  return (
    <div>
      <section>
        <form onSubmit={handleForm} className="form">
          <input
            className="form-input mb-1"
            type="text"
            name="text"
            value={text}
            onChange={(e) =>  setText(e.target.value)} //if we passed the evebts inline typescript infer the type of the type for us
          />
          <input
            className="form-input mb-1"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-block">submit</button>
        </form>
      </section>
    </div>
  );
}
export default Component;
