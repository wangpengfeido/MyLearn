import React from "react";

import { useRouteMatch, Link } from "react-router-dom";

export const Bbb = function () {
  const path1 = "/aaa/:id";
  const match1 = useRouteMatch(path1);

  const path2 = "/bda-use-route-match/:id";
  const match2 = useRouteMatch(path2);

  return (
    <fieldset>
      <div>useRouteMatch 也可以传入一个 path 字符串，返回这个 path 的匹配信息</div>
      <fieldset>
        匹配{path1}：{JSON.stringify(match1)}
      </fieldset>
      <fieldset>
        <div>
          <Link to="/bda-use-route-match/1">/bda-use-route-match/1</Link>
        </div>
        <div>
          <Link to="/bda-use-route-match/2">/bda-use-route-match/2</Link>
        </div>
        <div>
          匹配：{path2}：{JSON.stringify(match2)}
        </div>
      </fieldset>
    </fieldset>
  );
};
