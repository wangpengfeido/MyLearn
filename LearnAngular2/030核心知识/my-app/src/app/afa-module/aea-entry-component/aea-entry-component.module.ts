import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AfaAeaAaaComponent} from './afa-aea-aaa/afa-aea-aaa.component';
import {RouterModule} from "@angular/router";

//入口组件是 Angular 命令式加载的（也就是说你没有在模板中引用过它）任意组件
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'AfaAeaAaaComponent',
      //路由模块是入口组件，会自动添加到entryComponents中
      component: AfaAeaAaaComponent,
    }])
  ],
  declarations: [AfaAeaAaaComponent],
  //引导用的根模块是入口组件，会自动添加到entryComponents中
  bootstrap: [],
  //显式添加入口组件
  entryComponents: [],
})
export class AeaEntryComponentModule {
}

//Angular 编译器只会为那些可以从 entryComponents 中直接或间接访问到的组件生成代码。
//如果一个组件既不是入口组件也不没有在模板中使用过，摇树优化工具就会把它扔出去。 所以，最好只添加那些真正的入口组件，以便让应用尽可能保持精简。
