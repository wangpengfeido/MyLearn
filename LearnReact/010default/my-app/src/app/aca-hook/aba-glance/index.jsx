import React from 'react';

import { AaaStateHook } from './aaa-state-hook';
import { AbaEffectHook } from './aba-effect-hook';
import { AcaOwnHook } from './aca-own-hook';

export function AbaGlance() {
  return (
    <div>
      <AaaStateHook></AaaStateHook>
      <AbaEffectHook></AbaEffectHook>
      <fieldset>
        <h2>Hook使用规则</h2>
        <p>只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。</p>
        <p>只能在 React 的函数组件中调用 Hook。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）</p>
      </fieldset>
      <AcaOwnHook></AcaOwnHook>
    </div>
  );
}
