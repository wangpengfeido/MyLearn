import React, { useState } from 'react';

function App() {
  const [n, setN] = useState(0);

  const handleLoadModel = () => {
    import('./printMe.js').then(({ default: printMe }) => {
      printMe();
    });
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => setN(n + 1)}>更新</button>
      </div>
      <hr />
      <div>{JSON.stringify(process.env)}</div>
      <hr />
      <div> PUBLIC_URL 只在 build 环境生效</div>
      <hr />
      <div>
        <button onClick={() => handleLoadModel()}>加载新模块</button>
      </div>
    </div>
  );
}

export default App;
