import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/**
 * NgModule 是组织 Angular 应用的一种方式，它的元数据分为三类
 * 静态的：declarations,entryComponent
 * 运行时：providers
 * 组合/分组：imports exports
 */
@NgModule({
  declarations: [],
  entryComponents: [],
  providers: [],
  imports: [
    CommonModule
  ],
  exports: [],
})
export class AkaNgmoduleModule {
}
