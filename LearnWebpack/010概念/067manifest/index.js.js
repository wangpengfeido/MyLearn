// 在使用 webpack 构建的典型应用程序或站点中，有三种主要的代码类型：
// 1. 你或你的团队编写的源码。
// 2. 你的源码会依赖的任何第三方的 library 或 "vendor" 代码。
// 3. webpack 的 runtime 和 manifest，管理所有模块的交互。


// runtime 包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。


// 当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "Manifest"，当完成打包并发送到浏览器时，会在运行时通过 Manifest 来解析和加载模块。
// 无论你选择哪种模块语法，那些 import 或 require 语句现在都已经转换为 __webpack_require__ 方法，此方法指向模块标识符(module identifier)。通过使用 manifest 中的数据，runtime 将能够查询模块标识符，检索出背后对应的模块。





// 这通常不需要了解，但当需要优化性能时它是有用的，如计算content hash

















