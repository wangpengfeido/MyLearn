if ('serviceWorker' in navigator) {
  // 注册 service worker
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      console.log('注册sw成功');
    })
    .catch((error) => {
      console.log('注册sw失败', error);
    });
}
