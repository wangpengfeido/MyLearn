import {Component, OnInit} from '@angular/core';

//定义一个组件
//组件命名：文件名component-name.component.ts 类名ComponentNameComponent
@Component({
  //使用装饰器语法为组建类附加元数据（metadata）。其他元数据装饰器有@Injectable、@Input和@Output等
  //selector 选择器，选择插入组件的位置
  selector: 'app-aca-components',
  //template 模版，在模版中可使用模版语法
  template: `
    <div>这是一个组件</div>`,
  styleUrls: [],
  //providers 依赖注入
  providers:[],
})
export class AcaComponentsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
