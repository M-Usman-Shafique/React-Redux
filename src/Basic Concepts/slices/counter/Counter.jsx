import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

function Counter() {
  // let [count, setCount] = useState(0);
  // after creating store, no need to declare 'count' here.
  const count = useSelector((state) => state.counter.count);     // 'counter' belongs to redux store. 
  const theme = useSelector((state) => state.theme.color);       // 'theme' belongs to redux store.
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increse</button>
      <span style={{color: theme, fontSize: 25, fontWeight: "bold", paddingLeft: 7, paddingRight: 7}}>{count}</span>
      <button onClick={() => dispatch(decrement())} className="btn">Decrease</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment x5</button>
    </div>
  );
}

export default Counter;
