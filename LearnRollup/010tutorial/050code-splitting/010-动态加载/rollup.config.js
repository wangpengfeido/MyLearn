export default {
  input: "src/main.js",
  output: [
    {
      // 使用 dir 选项来配置放置 chunk 的位置
      dir: "dist",

      // 使用 dir 选项后，不再需要 file 选项
      // file: "bundle.js",

      // 使用 entryFileNames 选项，配置生成的入口 chunk 的文件名
      entryFileNames: "[name]-entry.js",

      // 使用 chunkFileNames 选项，配置代码分割时的 chunk 文件名
      chunkFileNames: "[name]-[hash]-chunk.js",

      format: "esm",
    },
    {
      dir: "dist",
      entryFileNames: "[name]-entry-cjs.js",
      chunkFileNames: "[name]-[hash]-chunk-cjs.js",
      format: "cjs",
    },
  ],
};
