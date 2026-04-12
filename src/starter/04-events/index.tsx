import { useState } from "react";

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  } // but we have to explicity set the type if we use a function as reference

  return (
    <div>
      <section>
        <form className="form">
          <input
            className="form-input mb-1"
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)} //if we passed the evebts inline typescript infer the type of the type for us
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
