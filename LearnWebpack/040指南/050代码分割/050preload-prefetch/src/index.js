const addPrefetchBtn = document.createElement("button");
addPrefetchBtn.innerHTML = "添加prefetchBtn";
addPrefetchBtn.addEventListener("click", () => {
  import(/* webpackChunkName: "prefetchBtn" */ "./prefetchBtn.js").then(
    ({ default: prefetchBtn }) => {
      document.body.appendChild(prefetchBtn());
    }
  );
});
document.body.appendChild(addPrefetchBtn);

const addPreloadBtn = document.createElement("button");
addPreloadBtn.innerHTML = "添加preloadBtn";
addPreloadBtn.addEventListener("click", () => {
  import(/* webpackChunkName: "preloadBtn" */ "./preloadBtn.js").then(
    ({ default: preloadBtn }) => {
      document.body.appendChild(preloadBtn());
    }
  );
});
document.body.appendChild(addPreloadBtn);
