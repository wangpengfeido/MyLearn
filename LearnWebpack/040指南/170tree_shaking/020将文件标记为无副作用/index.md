webpack 会对无副作用的模块进行 tree shaking，而忽略有副作用的模块。

如果项目中全部是 esm 模块，可以很容易地识别出哪些文件是有副作用的，但我们的项目中通常掺杂其他模块。

可以在 package.json 的 sideEffects 或 module.rules 中 rule.sideEffects 配置副作用文件。

注意：所有导入的文件都会受 tree shaking 影响，包括用 loader 转换的文件。例如，css等文件也需要标记为有副作用，以避免无意删除它们


