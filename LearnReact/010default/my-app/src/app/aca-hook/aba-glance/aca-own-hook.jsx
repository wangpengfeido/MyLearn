import React, { useState, useEffect } from 'react';

export function AcaOwnHook() {
  return (
    <fieldset>
      <h2>自定义hook</h2>
      <p>目前为止，有两种主流方案来解决逻辑重用问题：高阶组件和 render props。自定义 Hook 可以让你在不增加组件的情况下达到同样的目的。</p>
      <fieldset>
        <FriendStatus friend={{ id: 1, name: 1 }}></FriendStatus>
        <FriendListItem friend={{ id: 2, name: 2 }}></FriendListItem>
      </fieldset>
      <p>上面复用Hook的两个组件的 state 是完全独立的。Hook 是一种复用状态逻辑的方式，它不复用 state 本身。</p>
      <p>事实上 Hook 的<strong>每次调用都有一个完全独立的 state</strong> —— 因此你可以在单个组件中多次调用同一个自定义 Hook。</p>
      <p>自定义 Hook 更像是一种约定而不是功能。如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook。</p>
    </fieldset>
  );
}

// 模拟
const callbacks = {};
const ChatAPI = {
  subscribeToFriendStatus(friendID, callback) {
    callbacks[friendID] = callback;
  },
  unsubscribeFromFriendStatus(friendID) {
    Reflect.deleteProperty(callbacks, friendID);
  },
};
window.acaOwnHook_changeFriendStatus = function (friendID, isOnline) {
  callbacks[friendID]({ isOnline });
};

// 自定义 hook
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, (status) => {
      setIsOnline(status.isOnline);
    });
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID);
    };
  });

  return isOnline;
}

// 在不同的组件中使用自定义Hook
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return <li style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</li>;
}
