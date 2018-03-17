import {Component, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import {AbaAdaAbaComponent} from "./aba-ada-aba/aba-ada-aba.component";
import {AbaAdaAcaService} from "./aba-ada-aca/aba-ada-aca.service";

@Component({
  selector: 'app-ada-component-communication',
  templateUrl: './ada-component-communication.component.html',
  styleUrls: ['./ada-component-communication.component.css'],
  providers: [AbaAdaAcaService],
})
export class AdaComponentCommunicationComponent implements OnInit, AfterViewInit {

  constructor(private counterService: AbaAdaAcaService) {
  }

  ngOnInit() {
  }

  valueOne = {
    x: 'xxx',
    y: 'yyy',
  };

  valueTwo = 'abcde';

  eventHandler($event) {
    console.log('event is handled', $event);
  }

  consoleLog(params) {
    console.log('..........', params);
  }

  //父组件调用@ViewChild()
  @ViewChild(AbaAdaAbaComponent)
  private counter1: AbaAdaAbaComponent;

  getCountOne: Function = function () {
    return 0;
  };

  counterOneAdd() {
    this.counter1.add();
  }

  counterOneSub() {
    this.counter1.sub();
  }

  //当存在一个组件的多个实例时，只能取到第一个
  @ViewChild(AbaAdaAbaComponent)
  private counter2: AbaAdaAbaComponent;

  getCountTwo: Function = function () {
    return 0;
  };

  counterTwoAdd() {
    this.counter2.add();
  }

  counterTwoSub() {
    this.counter2.sub();
  }


  ngAfterViewInit() {
    //被注入的组件只有在Angular显示了父组件视图之后才能访问
    //然后Angular会调用ngAfterViewInit生命周期钩子，但这时候再更新父组件视图的计数就已经太晚了。Angular的单向数据流规则会阻止在同一个周期内更新父组件视图。我们在显示计数之前会被迫再等一轮。
    setTimeout(() => {
      this.getCountOne = () => this.counter1.count;
      this.getCountTwo = () => this.counter2.count;
    });
  }

  //通过服务通信
  //这里只写一个随便的例子，使用服务的最佳实践是配合rxjs
  //在父组件（即本组件）的providers中注入服务，可以保证与子组件中使用同一个服务的实例
  consoleCountInService() {
    console.log('count in service', this.counterService.count);
  }
}
