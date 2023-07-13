import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        className="border-2 border-blue-500 hover:border-blue-700 focus:border-blue-700 text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded m-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="border-2 border-blue-400 hover:border-blue-600 focus:border-blue-700 text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded m-2"
        onClick={() => dispatch(incrementByAmount(2))}
      >
        Increment By Value
      </button>
      <span className=" focus:border-blue-700 text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded m-2">{count}</span>
      <button
        className="border-2 border-green-500 hover:border-green-700 focus:border-green-700 text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded m-2"
        onClick={() => dispatch(decrement())}
      >
        Deccrement
      </button>
    </div>
  );
}

export default App;
