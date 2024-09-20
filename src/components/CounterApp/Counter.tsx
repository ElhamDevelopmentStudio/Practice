import { useDispatch, useSelector } from "react-redux";
import { decremeny, increment } from "../../redux/slices/counterSlice";
import { RootState } from "../../redux/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decremeny());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-center text-4xl font-bold mb-6 text-gray-800">
          {count}
        </h1>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
