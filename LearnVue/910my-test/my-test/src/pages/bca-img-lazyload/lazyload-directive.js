export default {
  inserted(el, binding) {
    el.temp_observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].intersectionRatio > 0) {
          el.src = binding.value;
          el.temp_observer && el.temp_observer.disconnect();
        }
      },
      {
        rootMargin: "500px",
      }
    );
    el.temp_observer.observe(el);
  },
  unbind(el) {
    el.temp_observer && el.temp_observer.disconnect();
  },
};
