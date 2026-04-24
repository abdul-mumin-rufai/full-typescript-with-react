import { increment, decrement, reset, stateStatus } from "./counterSclice";
import { useAppDispatch, useAppSelector } from "../../hooks";

function Component() {
  const { count, status } = useAppSelector((state) => state.counter); //useAppSelector can infer the type for us
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Count: {count }</h2>
      <h2>Status: { status}</h2>

      <div className='btn-container'>
        <button onClick={() => dispatch(increment())} className='btn'>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className='btn'>
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className='btn'>
          Reset
        </button>
      </div>
      <div className='btn-container'>
        <button onClick={() => dispatch(stateStatus('active'))} className='btn'>
          Set Status to Active
        </button>
        <button className='btn' onClick={() => dispatch(stateStatus('notActive'))}>
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;
