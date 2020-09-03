function throttle(func, wait) {
  let timer;
  return function(...args) {
    let context = this;
    if (!timer) {
      timer = setTimeout(function() {
        func.apply(context, args);
        timer = null;
      }, wait);
    }
  };
}

export default {
  inserted(el, binding) {
    const parent = el.parentElement;
    el.temp_lazyloadListener = throttle(() => {
      if (el.offsetTop < parent.offsetHeight + parent.scrollTop + 100) {
        el.src = binding.value;
        parent.removeEventListener("scroll", el.temp_lazyloadListener);
      }
    });
    el.temp_lazyloadListener();
    parent.addEventListener("scroll", el.temp_lazyloadListener);
  },
  unbind(el) {
    parent.removeEventListener("scroll", el.temp_lazyloadListener);
  },
};
