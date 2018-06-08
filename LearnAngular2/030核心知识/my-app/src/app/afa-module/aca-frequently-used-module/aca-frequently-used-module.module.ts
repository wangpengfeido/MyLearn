import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/**
 * 常用模块
 *BrowserModule    当你想要在浏览器中运行应用时
 CommonModule    当你想要使用 NgIf 和 NgFor 时
 FormsModule    当要构建模板驱动表单时（它包含 NgModel ）
 ReactiveFormsModule    当要构建响应式表单时
 RouterModule    要使用路由功能，并且你要用到 RouterLink,.forRoot() 和 .forChild() 时
 HttpClientModule    当你要和服务器对话时
 */
/**
 * BrowserModule导入并重新导出了CommonModule
 * 在浏览器中运行时，必须在根模块中导入BrowserModule
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AcaFrequentlyUsedModuleModule {
}
