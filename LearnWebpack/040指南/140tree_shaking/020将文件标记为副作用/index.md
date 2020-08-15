可以在 package.json 的 sideEffects 或 module.rules 的 rule.sideEffects 配置副作用文件

以让 tree shaking 忽略掉它们

注意：css等文件需要添加到sideEffects列表中，以避免无意删除它们


