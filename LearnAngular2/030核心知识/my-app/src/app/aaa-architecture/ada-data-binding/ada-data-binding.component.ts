import {Component, OnInit} from '@angular/core';

/**
 * 数据绑定有四种：
 * DOM                                 COMPONENT
 *        <---- {{value}} ----------
 *        <-- [property] = "value"--
 *        --- (event) = "handler"--->
 *        <-- [(ng-model)] = "property" -->
 */
/**
 * 使用双向绑定ngModel需要导入FormsModule
 */

@Component({
  selector: 'app-ada-data-binding',
  template: `
    <div>{{a}}</div>
    <div><input [disabled]="isDisable"/></div>
    <div (click)="handleClick()">click</div>
    <div><input [(ngModel)]="a"/></div>`,
  styleUrls: ['./ada-data-binding.component.css']
})
export class AdaDataBindingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  a: string = 'aaa';

  isDisable = true;

  handleClick = function () {
    alert('clicked');
  }

}
