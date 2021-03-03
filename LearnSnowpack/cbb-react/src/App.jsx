import React, { useState } from "react";
import logoPng from "./snowpack.png";
import logoSvg from "./snowpack.svg";

const App = () => {
  const [n, setN] = useState(0);
  return (
    <div>
      <div>this is app.</div>
      <div>
        <button onClick={() => setN(n + 1)}>{n}</button>
      </div>
      <div>
        <img src={logoPng} style={{ width: "100px" }}></img>
        <img src={logoSvg} style={{ width: "100px" }}></img>
      </div>
    </div>
  );
};

export default App;
