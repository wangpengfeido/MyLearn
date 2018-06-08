import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/**
 * 创建单例服务模块
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  /**
   * 这个模块提供了一些服务
   */
  providers: [],
})
export class AhaAaaSingletonServiceModule {
}
/*
* 这个模块最好只注入一次在应用的根模块中
* 因为模块每注入一次，模块中的服务就会生成一个实例，如果这样服务也就不是单例的了
* */
