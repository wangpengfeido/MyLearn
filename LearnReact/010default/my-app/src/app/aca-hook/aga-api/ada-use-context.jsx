import React, { useContext } from "react";

export function AdaUseContext() {
  return (
    <div>
      <fieldset>
        <p>useContext接收一个context对象，并返回context的当前值。</p>
        <p>当context更新时，该hook会触发重渲染。即使祖先使用了React.memo或shouldCOmponentUpdate，也会触发重渲染。</p>
        <p>useContext(MyContext) 就相当于class组件中的 static contextType = MyContext</p>
        <Parent></Parent>
      </fieldset>
    </div>
  );
}

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeCotent = React.createContext(themes.light);

function Parent() {
  return (
    <fieldset>
      <div>parent</div>
      <ThemeCotent.Provider value={themes.dark}>
        <Child></Child>
      </ThemeCotent.Provider>
    </fieldset>
  );
}

function Child() {
  const theme = useContext(ThemeCotent);
  return (
    <fieldset>
      <div style={{ color: theme.foreground, background: theme.background }}>
        child
      </div>
    </fieldset>
  );
}
