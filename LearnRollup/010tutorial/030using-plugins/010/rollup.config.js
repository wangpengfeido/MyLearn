import json from 'rollup-plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  // 使用插件
  plugins: [json()],
}


