production 模式下默认使用了 TerserPlugin

也可以使用 optimization.minimizer 选项，选择其他其他插件，但其必须具有删除未引用代码的能力（进行 tree sharking）。如
* BabelMinifyWebpackPlugin
* ClosureCompilerPlugin



