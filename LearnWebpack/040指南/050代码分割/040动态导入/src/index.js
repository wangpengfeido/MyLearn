function getComponent() {
  // 动态导入模块
  // 这里使用了 webpackChunkName 为 chunk 命名
  return import(/* webpackChunkName: "lodash" */ "lodash")
    .then(({ default: _ }) => {
      const element = document.createElement("div");

      element.innerHTML = _.join(["Hello", "webpack"], " ");

      return element;
    })
    .catch((error) => "An error occurred while loading the component");
}

// 也可以配合 async 函数使用
async function getComponent2() {
  const element = document.createElement("div");

  const { default: _ } = await import(
    /* webpackChunkName: "lodash" */ "lodash"
  );

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
