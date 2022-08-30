import { rollup, RollupOptions, OutputOptions } from 'rollup';
import replace from '@rollup/plugin-replace';

const inputOptions: RollupOptions = {
  input: 'src/main.js',
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('aaa'),
    }),
  ],
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
