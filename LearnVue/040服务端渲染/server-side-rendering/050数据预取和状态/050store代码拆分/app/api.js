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



