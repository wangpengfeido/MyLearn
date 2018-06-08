## karma-cli
#### karma init
初始化karma并创建karma.conf
#### karma start [configFile] [--help]
开始检测
* configFile 配置文件
* --help 帮助

## karma.conf
#### 文件匹配规则
在exclude/files/preprocessors三个设置属性中，使用minimatch匹配规则。
#### autoWatch
* cli:--auto-watch --no-auto-watch

是否监视文件改变。

#### autoWatchBatchDelay
开始检测的延迟，毫秒数。告诉karma在最后一次文件改变后，过多长时间开始检测（防抖）。这样能使多个变更同时进行检测。

#### basePath
相对路径的根路径，在files/exclude设置属性中。如果basePath是一个相对路径，它将由__dirname确定。
