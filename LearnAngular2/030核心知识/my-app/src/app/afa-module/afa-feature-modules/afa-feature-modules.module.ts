import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/**
 * 特性模块用于组织与特定应用有关的代码
 * 可以导出特性模块提供的功能，并在其他模块中导入该模块，以使用这些功能
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
})
export class AfaFeatureModulesModule {
}
