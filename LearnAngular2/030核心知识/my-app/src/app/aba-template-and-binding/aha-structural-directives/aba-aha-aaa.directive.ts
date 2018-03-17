import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[abaAhaAaa]'
})
export class AbaAhaAaaDirective {

  //可以使用TemplateRef取得<ng-template>之间的内容，并通过ViewContainerRef来访问这个视图容器（即ng-template本身）。

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  private _hasView = false;

  //设定一个输入属性并用set取值器监听其变化
  @Input()
  set abaAhaAaa(condition: boolean) {
    if (condition && !this._hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this._hasView = true
    } else if (!condition && this._hasView) {
      this.viewContainer.clear();
      this._hasView = false;
    }
  }

}
