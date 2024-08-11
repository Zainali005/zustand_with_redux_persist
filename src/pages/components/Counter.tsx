// components/Counter.js
import useStore from '@/zustand/store';

const Counter = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-80 text-center'>
        <h1 className='text-3xl font-semibold mb-4 text-gray-800'>Count: {count}</h1>
        <div className='flex space-x-4'>
          <button
            onClick={increment}
            className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75'
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
