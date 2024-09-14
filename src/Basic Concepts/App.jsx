import React from "react";
import Counter from "./features/counter/Counter";
import Theme from "./features/theme/Theme.jsx";
import Coin from "./features/coin/Coin.jsx";

function App() {
  return (
    <div className="outer">
      <img
        src="https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif"
        alt="redux-gif"
      />
      <div className="flex-row">
        <Counter />
        <Coin />
        <Theme />
      </div>
    </div>
  );
}

export default App;
