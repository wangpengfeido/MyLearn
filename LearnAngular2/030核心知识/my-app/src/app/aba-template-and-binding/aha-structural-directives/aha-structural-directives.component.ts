import {Component, OnInit} from '@angular/core';

//结构型指令 — 通过添加和移除 DOM 元素改变 DOM 布局的指令。如ngFor ngIf ngSwitch
//我们可以在一个宿主元素上应用多个属性型指令，但只能应用一个结构型指令。
@Component({
  selector: 'app-aha-structural-directives',
  templateUrl: './aha-structural-directives.component.html',
  styleUrls: ['./aha-structural-directives.component.css']
})
export class AhaStructuralDirectivesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  list = [{
    number: 100,
    str: 'sdf',
  }, {
    number: 34,
    str: 'rt',
  }];

  switchValue = 'a';

  boolValue = true;
}
