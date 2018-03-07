import {Component, OnInit} from '@angular/core';

@Component({
  //在出现元素<app-aaa-displaying-data>时实例化该组件
  selector: 'app-aaa-displaying-data',
  //可以使用temlate，即内联模版
  //也可以使用templateUrl，即模版文件
  templateUrl: './aaa-displaying-data.component.html',
  styleUrls: ['./aaa-displaying-data.component.css']
})
export class AaaDisplayingDataComponent implements OnInit {

  constructor() {
    this.b = 'bbb';
  }

  ngOnInit() {
  }

  //可以初始化变量，也可以在构造函数中赋值
  a = 'aaa';
  b: string;

  list= [1, 2, 3];
}
