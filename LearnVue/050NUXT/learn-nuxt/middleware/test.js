export default function(context) {
  return new Promise((resolve) => {
    setTimeout(() => {
      global.console.log(context)
      resolve()
    }, 5000)
  })
}
