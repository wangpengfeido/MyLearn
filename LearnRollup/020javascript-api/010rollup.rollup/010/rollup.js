const rollupJsonPlugin = require('rollup-plugin-json');

const rollup = require('rollup');

const inputOptions = {
  input: 'src/main.js',
  plugins: [rollupJsonPlugin()],
};
const outputOptions = {
  file: 'bundle.js',
  format: 'cjs',
};

async function build() {
  // rollup.rollup返回一个Promise，它解析了一个bundle对象
  const bundle = await rollup.rollup(inputOptions);

  // bundle.watchFiles：bundle依赖的文件名列表
  console.log(bundle.watchFiles);

  // 可以生成代码
  const {output} = await bundle.generate(outputOptions);
  for (const chunkOrAsset of output) {
    if (chunkOrAsset.isAsset) {
      // asset
      console.log('Asset', chunkOrAsset);
    } else {
      console.log('Chunk', chunkOrAsset.modules);
    }
  }

  // 也可以写入到文件
  await bundle.write(outputOptions);
}

build();





