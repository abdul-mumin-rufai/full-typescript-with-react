import { TypescriptComponent, useTypescriptContext } from "./contextAPI";

function MainComponent() { 
  return (
    <TypescriptComponent>
      <Component />
    </TypescriptComponent>
  );
    return <Component/>
};

const context = useTypescriptContext();
console.log(context);



function Component() {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
    </div>
  );
}
export default MainComponent();
