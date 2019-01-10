// 模拟了一个异步数据的地方
export function fetchItem(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        data: `data of ${id}`,
      });
    });
  });
}



