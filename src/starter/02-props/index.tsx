import {type PropsWithChildren } from "react";

type myProp = PropsWithChildren<{ 
  name: string;
  school: string;
  id: number;
}>

function Component({ name, school, id, children}: myProp) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Props</h2>
      <h2>name: {name}</h2>
      <h2>school:{school}</h2>
      <h3>ID: {id}</h3>
      {children}
    </div>
  );
}
export default Component;
