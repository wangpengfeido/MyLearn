const rollupJsonCommonjs = require('rollup-plugin-commonjs');
const rollup = require('rollup');

const inputOptions = {
  input: 'src/main.js',
  // 使用 rollup-plugin-commonjs 插件，使之可以引用 commonjs 模块
  plugins: [rollupJsonCommonjs()],
};

const outputOptions = {
  file: 'dist/bundle.js',
  format: 'cjs',
};

async function build() {
  const bundle = await rollup.rollup(inputOptions);

  await bundle.write(outputOptions);
}

build();





