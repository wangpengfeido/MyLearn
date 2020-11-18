if (process.env.TEST === 'a') {
  __webpack_public_path__ = '/aaa/';
} else if (process.env.TEST === 'b') {
  __webpack_public_path__ = '/bbb/';
} else {
  __webpack_public_path__ = './';
}

// if (location.hash === '#aaa') {
//   __webpack_public_path__ = '/aaa/';
// } else if (location.hash === '#bbb') {
//   __webpack_public_path__ = '/bbb/';
// } else {
//   __webpack_public_path__ = './';
// }
