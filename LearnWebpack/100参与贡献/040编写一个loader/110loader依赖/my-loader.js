const path = require("path");
const fs = require("fs");

module.exports = function (value) {
  const callback = this.async();
  const dependencyPath = path.resolve("./dependency.txt");

  // 声明依赖的外部资源
  // 这是为了使缓存无效，以及 watch 模式下的重编译
  this.addDependency(dependencyPath);

  fs.readFile(dependencyPath, "utf-8", (err, txt) => {
    value = value.replace("??????", `!!!changed by loader1:${txt}!!!??????`);
    callback(null, value);
  });
};
