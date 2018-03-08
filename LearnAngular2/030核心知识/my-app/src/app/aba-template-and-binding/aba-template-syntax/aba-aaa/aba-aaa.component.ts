import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'aba-aaa',
  templateUrl: './aba-aaa.component.html',
  styleUrls: ['./aba-aaa.component.css'],
})
export class AbaAaaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  //创建EventEmitter实例
  @Output() myEvent = new EventEmitter<number>();

  handleClick() {
    //触发自定义事件
    this.myEvent.emit(12);
  }
}
