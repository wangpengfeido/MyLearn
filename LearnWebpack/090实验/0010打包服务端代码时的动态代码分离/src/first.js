import('./a').then(({a}) => {
  a();
});

export default function () {
  console.log('this is index');
}
