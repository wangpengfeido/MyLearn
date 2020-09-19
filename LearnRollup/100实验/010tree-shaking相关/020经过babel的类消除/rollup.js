const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

const inputOptions = {
  input: 'src/main.js',
  plugins: [
    // 使用resolve和babel插件
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
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

// 使用.bablerc有几个需要注意的地方
// 1.通常要设置modules为false。否则它将会把模块转换为commonJS，阻碍tree shaking
// 2.通常将.babelrc放在src中，以便有不同的babel配置。



