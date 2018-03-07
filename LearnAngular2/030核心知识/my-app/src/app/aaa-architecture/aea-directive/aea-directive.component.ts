import {Component, OnInit} from '@angular/core';

/**
 * 组件实际上是带模版的指令
 * 除组件外，还有属性型和结构型指令
 * 结构型指令通过在 DOM 中添加、移除和替换元素来修改布局，如ngIf、ngFor。
 * 属性型指令修改一个现有元素的外观或行为，如ngModel。
 */

@Component({
  selector: 'app-aea-directive',
  template: `
    <div>
      <div *ngFor="let item of data">
        <div *ngIf="item.index>1">
          <input type="number" [(ngModel)]="item.index"/>
        </div>
      </div>
    </div>`,
  styleUrls: ['./aea-directive.component.css']
})
export class AeaDirectiveComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  data = [{
    index: 1,
  }, {
    index: 2,
  }, {
    index: 3,
  }, {
    index: 4
  },]

}
