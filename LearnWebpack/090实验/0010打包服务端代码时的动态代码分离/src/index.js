import('./content01').then(res => {
  res.default();
});

export default function () {
  console.log('this is index');
}
