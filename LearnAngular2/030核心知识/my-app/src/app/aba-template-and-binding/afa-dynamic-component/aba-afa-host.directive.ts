import {Directive, ViewContainerRef} from '@angular/core';

//用于插入组件的指令
@Directive({
  selector: '[abaAfaHost]'
})
export class AbaAfaHostDirective {

  //注入了ViewContainerRef来获取对容器视图的访问权，这个容器就是那些动态加入的组件的宿主(即应用本指令的元素)。
  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
