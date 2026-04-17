import { TypescriptComponent, useTypescriptContext } from "./contextAPI";

function MainComponent() { 
  return (
    <TypescriptComponent>
      <Component />
    </TypescriptComponent>
  );
    return <Component/>
};


function Component() {
  const context = useTypescriptContext();
  console.log(context);
  
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
    </div>
  );
}
export default MainComponent;
