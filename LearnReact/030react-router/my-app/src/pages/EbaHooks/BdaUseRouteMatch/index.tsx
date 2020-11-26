import React from "react";
import { useRouteMatch } from "react-router-dom";

import { Bbb } from "./Bbb";

export const BdaUseRouteMatch = () => {
  const match = useRouteMatch();

  return (
    <div>
      <div>
        <div>useRouteMatch 可以用与 &lt;Route&gt; 组件相同的方式匹配当前URL。</div>
        <div>它可以做到在不渲染 Route 的情况下取得路由匹配信息</div>
      </div>
      <fieldset>
        <div>useRouteMatch 可以不接收参数，返回当前 &lt;Route&gt; 的匹配信息</div>
        <fieldset>匹配当前Route：{JSON.stringify(match)}</fieldset>
      </fieldset>
      <Bbb></Bbb>
    </div>
  );
};
