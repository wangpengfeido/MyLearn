import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {AbaAfaHostDirective} from "../aba-afa-host.directive";
import {AbaAfaInsert} from "../aba-afa-insert.component";


@Component({
  selector: 'aba-afa-dynamic-component',
  template: `
    <div>
      <div>this is dynamic component</div>
      <ng-template abaAfaHost>
      </ng-template>
    </div>`,
  styleUrls: ['./aba-afa-dynamic-component.component.css']
})
export class AbaAfaDynamicComponentComponent implements OnInit {

  //动态插入的组件及数据
  @Input() items;              //[{component,data}]
  //对模版中abaAfaHost指令的引用
  @ViewChild(AbaAfaHostDirective) host: AbaAfaHostDirective;

  //控制组件动态切换（辅助演示用的，与动态组件无关）
  currentIndex: number = -1;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadComponent();
    this.start();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    let item = this.items[this.currentIndex];

    //ComponentFactoryResolver来为每个具体的组件解析出一个ComponentFactory。 然后ComponentFactory会为每一个组件创建一个实例。
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);

    //将viewContainerRef指向宿主元素。host.viewContainerRef是指令中注入的。
    let viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();

    //创建组件实例插入到宿主元素
    let componentRef = viewContainerRef.createComponent(componentFactory);
    //与组件交互
    setTimeout(function () {
      (<AbaAfaInsert>componentRef.instance).data = item.data;
    })

    //通常，Angular编译器会为模板中所引用的每个组件都生成一个ComponentFactory类。 但是，对于动态加载的组件，模板中不会出现对它们的选择器的引用。
    //所以，要想确保编译器照常生成工厂类，就要把这些动态加载的组件添加到NgModule的entryComponents数组中

    //TODO:注意，这段代码会在dev模式下报ExpressionChangedAfterItHasBeenCheckedError错误，因为父组件脏检查后，子组件又脏检查，而又引起了父组件的二次脏检查，可以通过enableProdMode()解决
  }

  start() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 2000);
  }


}
