import {Component, OnInit} from '@angular/core';

import {AaaAfaService} from "./aaa-afa.service";

@Component({
  selector: 'app-afa-service',
  template: `<div>{{data}}</div>`,
  styleUrls: ['./afa-service.component.css'],
  //注册服务
  //将服务注册在组件层，比如这里，该组件的每一个新实例都会有一个服务的新实例。
  //也可以注册在根模块，以便在任何地方都使用服务的同一个实例。
  providers: [AaaAfaService]
})
export class AfaServiceComponent implements OnInit {

  constructor(private aaaAfa: AaaAfaService) {
  }

  ngOnInit() {
    this.data = this.aaaAfa.getData();
  }

  data = null;
}
