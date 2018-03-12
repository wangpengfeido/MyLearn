import {Component, Input, OnInit} from '@angular/core';

//除了组件钩子外，其他子系统或第三方库也可能有自己的钩子，自定义钩子

@Component({
  selector: 'aba-aca-aaa',
  templateUrl: './aba-aca-aaa.component.html',
  styleUrls: ['./aba-aca-aaa.component.css']
})
//声明周期钩子接口是可选的
export class AbaAcaAaaComponent implements OnInit {

  constructor() {
  }

  @Input() a: any;
  @Input() b:any;

  //当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在ngOnInit()之前。
  //没有输入属性时不会调用
  ngOnChanges(param) {
    console.log('OnChanges hook is called',param);
  }

  ngOnInit() {
    console.log('OnInit hook is called');
  }

  //在每个Angular变更检测周期中调用
  ngDoCheck() {
    console.log('ngDoCheck hook is called');
  }

  //第一次ngDoCheck()之后调用，只调用一次。
  ngAfterContentInit() {
    console.log('ngAfterContentInit hook is called');
  }

  //ngAfterContentInit()和每次ngDoCheck()之后调用
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked hook is called');
  }

  //第一次ngAfterContentChecked()之后调用，只调用一次。
  ngAfterViewInit() {
    console.log('ngAfterViewInit hook is called');
  }

  //ngAfterViewInit()和每次ngAfterContentChecked()之后调用。
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked hook is called');
  }

  //在Angular销毁指令/组件之前调用。
  ngOnDestroy() {
    console.log('ngOnDestroy hook is called');
  }

}
