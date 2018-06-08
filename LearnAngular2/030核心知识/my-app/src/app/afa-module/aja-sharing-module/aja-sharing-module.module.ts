import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AfaAjaComponent} from './afa-aja/afa-aja.component';
import {FormsModule} from "@angular/forms";

/**
 * 共享特性模块，可以在这里编写常用的指令、管道、组件等，然后在需要用的地方导入
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AfaAjaComponent],
  /**
   * 导出了一些功能
   * 本模块没有用到和导入的模块也可以重新导出，如FormsModule，这样只要导入本模块，就可以使用FormsModule的功能，即使本模块并没有用到它
   */
  exports: [FormsModule, AfaAjaComponent]
})
export class AjaSharingModuleModule {
}

/**
 * 注意，如果模块中有服务提供商，当导入模块时会创建服务新的实例
 * 这可能不是你想要的
 */
