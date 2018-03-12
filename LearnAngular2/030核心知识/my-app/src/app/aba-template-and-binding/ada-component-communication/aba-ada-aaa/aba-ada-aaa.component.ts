import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aba-ada-aaa',
  templateUrl: './aba-ada-aaa.component.html',
  styleUrls: ['./aba-ada-aaa.component.css']
})
export class AbaAdaAaaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  //数据从父组件传递到子组件
  @Input() a: any;

  private _b;

  //用setter截听属性变化
  //TODO：测试
  @Input()
  set b(b: any) {
    this._b = b.x + b.y;
  }

  get b(): any {
    return this._b;
  }

  //用OnChanges截听属性变化，这种适合截听多个属性
  // ngOnChanges(changes){
  //   console.log(changes);
  // }
}
