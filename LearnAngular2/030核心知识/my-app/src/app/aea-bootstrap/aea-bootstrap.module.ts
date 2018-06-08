import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AeaAaaComponent} from './aea-aaa/aea-aaa.component';

@NgModule({
  //导入其他module
  imports: [CommonModule],
  //该应用所拥有的组件
  //可以声明组件、指令、管道。
  //既不能不声明，也不能声明在多个模块中。其他模块使用时需要导出然后导入这个模块
  declarations: [AeaAaaComponent],
  //服务提供商
  providers: [],
  //根组件，用于插入index.html宿主页面（只在根模块有用）
  bootstrap: [],
})
export class AeaBootstrapModule {
}
