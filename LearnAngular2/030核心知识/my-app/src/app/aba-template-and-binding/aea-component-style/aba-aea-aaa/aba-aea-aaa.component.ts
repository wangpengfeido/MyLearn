import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'aba-aea-aaa',
  template: `
    <div class="red">red</div>`,
  //使用组件样式
  styles: ['.red{background-color: red;}'],
  // 在 @Component 的元数据中指定的样式只会对该组件的模板生效。
})
export class AbaAeaAaaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
