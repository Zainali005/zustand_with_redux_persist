// components/Counter.js
import useStore from '@/zustand/store';

const Counter = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div className='counter'>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
