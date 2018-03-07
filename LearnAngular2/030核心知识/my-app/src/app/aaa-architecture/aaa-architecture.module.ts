import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbaModulesComponent} from './aba-modules.component';
import { AcaComponentsComponent } from './aca-components.component';

@NgModule({
  //导入其他模块
  imports: [
    CommonModule
  ],
  //声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
  declarations: [
    AbaModulesComponent,
    AcaComponentsComponent,
  ],
  //declarations 的子集，可用于其它模块的组件模板
  exports: [AbaModulesComponent]
})
export class AaaArchitectureModule {
}
