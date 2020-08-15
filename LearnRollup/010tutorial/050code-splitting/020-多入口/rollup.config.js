export default {
  // 配置了多个入口
  input: ["src/main.js", "src/main2.js"],
  output: {
    dir: "dist",
    entryFileNames: "[name].js",
    format: "cjs",
  },
};

// 注意，两个入口共同引用的 foo 模块并没有产生两个副本，而是引用了一个相同的公共 chunk。
