可以在 package.json的sideEffects 或 module.rules的rule.sideEffects 配置副作用文件

以让tree shaking忽略掉它们

注意：css等文件需要添加到sideEffects列表中，以避免无意删除它们


