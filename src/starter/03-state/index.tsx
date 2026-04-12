import { useState } from "react";

function Component() {
  interface useStateInterface { 
    name: string;
    url: string;
    school: string;
    id: number
  };

  const studentRufai = [{
    name: 'abdul',
    url: 'abdul_url',
    school: 'danfa',
    id:11
  },{
    name: 'mumin',
    url: 'mumin_url',
    school: 'danfa',
    id:11
  },{
    name: 'rufai',
    url: 'rufai_url',
    school: 'danfa',
    id:11
  },{
    name: 'bawa',
    url: 'bawa_url',
    school: 'danfa',
    id:11
  }]

  // setting up primitive data types
  // typescript has the ability to infer the type of the data.
  //const [text, setText] = useState('i was clicked');
  const [number, setNumber] = useState(11)
  number
  const [schoolBoy, setSchoolBoy] = useState<useStateInterface[]>(studentRufai);

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>State</h2>
      <button className="btn bnt-center" onClick={() => {
        //setText('click')
        setNumber(120);
        setSchoolBoy([...schoolBoy, { name:'etoo', url: 'bawa_url',school: 'danfa',id:11}])
      }}>
        Click me
      </button>
    </div>
  );
}
export default Component;
