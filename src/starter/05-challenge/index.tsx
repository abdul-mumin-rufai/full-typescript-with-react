interface BasicInterface { 
  type: 'basic'; // discriminated unions and action here
  name: string;
};

interface AdvancedInterface { 
  type: 'advanced'; // discriminated unions and action here
  name: string;
  email: string;
};

type AllType = BasicInterface | AdvancedInterface;

function Component(props: AllType) {
  const { type, name } = props;
  if(type ==='basic')
  return (
    <article className='alert alert-success'>
      User: {name}
    </article>
    );
  
  return (
    <article className='alert alert-danger'>
      User: {name}
      Email: {props.email}
    </article>
  )
}
export default Component;
