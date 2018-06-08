import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AhaAcaPreventReimportModule {
  /*
  * 防止重复注入模块
  * 注入了自身。
  * @SkipSelf()表示在祖先注入器中查找AhaAcaPreventReimportModule，这样可以避免注入自身的死循环。
  * @Optional()表示可选，即使找不到AhaAcaPreventReimportModule也不会报异常。
  * 这样的话，如果找到了AhaAcaPreventReimportModule，就表示在祖先注入器中注入过，那么抛出一个异常，禁止重复注入。
  * */
  constructor(@Optional() @SkipSelf() parentModule: AhaAcaPreventReimportModule) {
    if (parentModule) {
      throw new Error('模块不能重复注入');
    }
  }
}
