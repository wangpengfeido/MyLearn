import { rollup, RollupOptions, OutputOptions } from 'rollup';

const inputOptions: RollupOptions = {
  input: 'src/main.js',
  plugins: [],
};
const outputOptions: OutputOptions = {
  file: 'dist/bundle.js',
  format: 'cjs',
};

async function build() {
  const bundle = await rollup(inputOptions);

  await bundle.write(outputOptions);
}

build();
