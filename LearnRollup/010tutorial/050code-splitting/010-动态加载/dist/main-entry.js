'use strict';

function main () {
  Promise.resolve(require('./foo-9b6403c2-chunk.js')).then(({ default: foo }) => {
    console.log(foo);
  });
}

module.exports = main;
