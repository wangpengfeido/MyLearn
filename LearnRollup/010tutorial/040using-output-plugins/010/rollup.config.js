import json from "rollup-plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.min.js",
      format: "cjs",
      // 使用 output plugin
      // 不知道为何不起作用
      plugins: [terser()],
    },
  ],
  plugins: [json()],
};
