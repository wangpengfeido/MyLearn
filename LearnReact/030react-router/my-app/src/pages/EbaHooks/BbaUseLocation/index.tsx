import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const BbaUseLocation = function () {
  const location = useLocation();
  useEffect(() => {
    console.log("location changed", location);
  }, [location]);

  return (
    <div>
      <div>useLocation</div>
      <div>
        location 代表当前的 url，当 url 变化时，useLocation 会返回一个新的
        location
      </div>
      <div>
        <button onClick={() => console.log(location)}>打印</button>
      </div>
      <fieldset>
        <div>可以通过监听location知道url的变化</div>
        <div>操作示例：</div>
        <div>
          <Link to="?a#a">a</Link>
        </div>
        <div>
          <Link to="?b#b">b</Link>
        </div>
      </fieldset>
    </div>
  );
};
