import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {AcaComponentsComponent} from './aca-components.component';
import {AdaDataBindingComponent} from './ada-data-binding/ada-data-binding.component';
import { AeaDirectiveComponent } from './aea-directive/aea-directive.component';
import { AfaServiceComponent } from './afa-service/afa-service.component';

//定义一个模块
@NgModule({
  //导入其他模块
  imports: [
    CommonModule,
    FormsModule
  ],
  //声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
  declarations: [
    AcaComponentsComponent,
    AdaDataBindingComponent,
    AeaDirectiveComponent,
    AfaServiceComponent,
  ],
  //declarations 的子集，可用于其它模块的组件模板
  exports: [AcaComponentsComponent]
})
export class AaaArchitectureModule {
}
