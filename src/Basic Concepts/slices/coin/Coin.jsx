import { useSelector } from "react-redux";

function Coin() {
  const coin = useSelector((state) => state.counter.count);
  const theme = useSelector((state) => state.theme.color);
  return (
    <div style={{color: theme, margin: 10, fontSize: 22, fontWeight: "bold"}}>
      <span>Coin: {coin}</span>
    </div>
  );
}

export default Coin;
