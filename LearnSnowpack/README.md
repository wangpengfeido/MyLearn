# 记录

## 概念
### snowpack如何工作
传统的webpack等构建工具在每次变化时将chunks生成bundle。在开发时，snowpack不会bundle，每个文件单独构建，当一个文件变化时，只构建那一个文件。snowpack也可以bundle构建用于生产环境，bundle也可以通过插件插入webpack或rollup。

开发时的 unbundled 是在开发时运送分开的文件到浏览器。这些文件仍然可以使用babel、typescript、sass等工具构建，在浏览器中用 ESM 模块分开加载。

unbundled development 相对于 bundle 的好处：
* 单文件构建更快
* 单文件构建更确定
* 单文件构建更容易debug
* 项目大小不影响构建速度
* 分开的文件cache
* 一句话：文件分开构建；永远cache

在使用npm包时，传统的构建方式这些包也会被bundle，而snowpack会单独处理这些依赖。过程如下：
1. snowpack 扫描app中使用的npm包。
2. snowpack 从 node_modules 中读取这些依赖。
3. snowpack 将每个依赖bundle为一个文件。
4. 每个文件可以单独使用ESM在浏览器中运行。
5. 因为依赖很少更改，所以snowpack很少需要重构建它们。

### build管道
build命令默认使用unbundled构建，与开发时看到的文件几乎一致。

bundle是一个可选的优化项，可以通过bundle做到老浏览器支持、代码压缩、代码分割、摇树优化、死代码消除等优化。

snowpack的bundle不需要特别多的bundle配置，因为在将代码发送到bundler之前，snowpack已经做了build工作。

如果想要老浏览器支持，可以在`package.json`中的`browserslist`选项设置，但最好还是添加一个bundler。

### HMR + Fast Refresh
snowpack 本身支持开箱即用的css、json、js等文件的HMR。

Fast Refresh 是指对HMR的具体框架扩展。在热更新时，保持组件的状态。一般可通过插件实现。

snowpack 提供了 HMR API：
```javascript
if (import.meta.hot) {
  import.meta.hot.accept(({ module }) => {
  });
}
```

## 使用

### React
snowpack 有内置的 JSX 支持，在`.jsx`文件中。注意：在html中引用时仍然可使用`.js`后缀，因为snowpack会将其编译。

## CLI
### snowpack dev
启动开发服务。

默认服务工作文件夹和index.html。可通过`mount`配置。

### snowpack build
构建。

默认构建进`build/`文件夹。

### snowpack --help
帮助。
