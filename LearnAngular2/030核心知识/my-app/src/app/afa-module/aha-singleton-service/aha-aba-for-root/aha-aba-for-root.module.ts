import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AhaAbaComponent} from './aha-aba/aha-aba.component';
import {AhaAbaService} from "./aha-aba.service";
import {AhaAbaSigletonService} from "./aha-aba-sigleton.service";

@NgModule({
  imports: [
    CommonModule,
  ],
  /**
   * 如果一个模块中即提供了服务提供商，又提供了可声明对象
   * 要多次导入该模块
   * 但还是想创建该模块中服务的单例
   * 那么可以使用forRoot
   */
  declarations: [AhaAbaComponent],
  providers: [AhaAbaService],
})
export class AhaAbaForRootModule {
  static forRoot(config) {
    return {
      ngModule: AhaAbaForRootModule,
      //这是只在使用forRoot时才提供的服务
      //可以使用{provide:...,useValue:...(config)}这种形式传入配置
      providers: [AhaAbaSigletonService]
    };
  }
}
