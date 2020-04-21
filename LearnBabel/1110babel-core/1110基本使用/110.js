const babel = require('@babel/core');

const code = `
  [1, 2, 3].map((n) => n + 1);
`;
babel.transform(
  code,
  {
    presets:['@babel/preset-env'],
  },
  (err, result) => {
    console.log(result);
  }
);
