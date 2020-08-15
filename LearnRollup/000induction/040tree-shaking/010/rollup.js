const rollupJsonPlugin = require('rollup-plugin-json');
const rollup = require('rollup');

const inputOptions = {
  input: 'src/main.js',
  plugins: [rollupJsonPlugin()],
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





