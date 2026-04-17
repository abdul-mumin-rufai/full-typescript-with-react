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
      <button onClick={() => {
        if (context.theme === 'dark') {
          context.setTheme('system');
          return;
        }
        context.setTheme('dark')
      }} className="btn btn-center">
        Toggle Theme
      </button>
    </div>
  );
}
export default MainComponent;
