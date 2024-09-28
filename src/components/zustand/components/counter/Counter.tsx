import useStore from '../../store/useStore';

const Counter = () => {
    const { count, doubleCount, increase, decrease, reset } = useStore();

    return (
      <div className="bg-white border-2 border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-mdß transition-shadow duration-300 flex flex-col space-y-3 h-screen items-center justify-center">
        <h1 className="text-xl font-bold text-gray-700 mb-2 pb-2 border-b-2 border-gray-200">Count: {count}</h1>
        <p className="text-gray-600">Double Count: {doubleCount()}</p>
        <div className="flex space-x-2">
          <button onClick={increase} className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Increase</button>
          <button onClick={decrease} className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">Decrease</button>
        </div>
        <button onClick={reset} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300">Reset</button>
      </div>
    );
}

export default Counter