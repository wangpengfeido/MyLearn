import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  //注意：这样只能截听引用的变化，而不能截听属性的变化
  //TODO：测试
  @Input()
  set b(b: any) {
    this._b = b + '2333';
  }

  get b(): any {
    return this._b;
  }

  //用OnChanges截听属性变化，这种适合截听多个属性
  //同样，只能截听引用的变化，而不能截听属性的变化
  ngOnChanges(changes){
    console.log(changes);
  }

  //父组件监听子组件的事件
  //注册事件
  @Output() testEvent=new EventEmitter<any>();
  buttonClick(){
    //触发事件
    this.testEvent.emit(10);
  }
}
