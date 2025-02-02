## 概览

<https://code.visualstudio.com/api>

### 扩展可以做什么？

- 更改 VSCode 外观
- 增加自定义组件与视图
- 创建一个 WebView 以显示一个 web 页面
- 支持一种新的语言
- debug 特殊的 运行时

## 开始开发

### 安装

安装 Yeoman 和 VS Code Extension Generator。

```
npm install -g yo generator-code
```

### 创建项目

```
yo code
```

### 调试

按`F5`会打开新的窗口进行扩展调试。

为什么可以使用`F5`进行调试？  
在`.vscode/launch.json`中已定义好两条调试配置。`F5`是调试的快捷键，也可以在左侧点击开始调试。

调试时可以在代码中打断点。

### 扩展是开始运行的要素

- Activation Events。注册在`package.json`中的 activationEvents 字段。当事件触发时，扩展变成活跃状态。
- Contribution Porints。`package.json`中 contributes 字段静态配置。
- VS Code API。可在扩展中调用的 API。

### 文件结构

```
├─.vscode
│ ├─launch.json    # 启动调试扩展
│ └─tasks.json    # 编译配置
├─build    # 编译脚本及配置
├─src
│ └─extension.ts    # 扩展源码
├─package.json    # 包含 manifest
```

### 扩展的 manifest

## API

#### vscode.commands.registerCommand

注册 Command Palette(`command+shift+p`) 命令，命令需要定义在`package.json`中。

#### vscode.window.showInformationMessage

显示提示信息。（窗口右下角弹出）
