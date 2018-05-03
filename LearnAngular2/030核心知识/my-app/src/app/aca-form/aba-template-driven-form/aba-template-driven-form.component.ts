import {Component, OnInit} from '@angular/core';

/**
 * 使用模板驱动表单需要导入FormsModule，它将自动在<form>上添加ngForm指令
 */
@Component({
  selector: 'app-aba-template-driven-form',
  templateUrl: './aba-template-driven-form.component.html',
  styleUrls: ['./aba-template-driven-form.component.css']
})
export class AbaTemplateDrivenFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  selectList = [{name: 'x', value: 1}, {name: 'y', value: 2}, {name: 'z', value: 3}];

  a;

  b;

  c;

  onSubmit(){
    console.log('form is submitted');
  }

}
