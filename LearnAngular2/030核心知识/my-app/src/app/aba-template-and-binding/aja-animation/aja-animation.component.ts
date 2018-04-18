import {Component, OnInit} from '@angular/core';
import {animate, group, keyframes, state, style, transition, trigger} from "@angular/animations";

/*
 * 动画会根据浏览器支持自动选择实现方式。你需要据需使用腻子函数
 */

/*
 * 在使用前注入BrowserModule, BrowserAnimationsModule
 */

@Component({
  selector: 'app-aja-animation',
  templateUrl: './aja-animation.component.html',
  styleUrls: ['./aja-animation.component.css'],
  animations: [
    //定义了一个trigger动画，引用方式为[@triggerName]=''
    trigger('changeState', [
      //定义状态
      state('true', style({
        backgroundColor: 'red',
        transform: 'scale(1)',
      })),
      state('false', style({
        backgroundColor: 'green',
        transform: 'scale(1.3)',
      })),
      state('a', style({
        backgroundColor: 'red',
        transform: 'scale(1)',
      })),
      state('b', style({
        backgroundColor: 'green',
        transform: 'scale(1.3)',
      })),
      state('c', style({
        backgroundColor: 'red',
        transform: 'scale(1)',
      })),
      state('d', style({
        backgroundColor: 'green',
        transform: 'scale(1.3)',
      })),
      //定义转场
      transition('true=>false', animate('1000ms ease-in')),
      transition('false=>true', animate('2000ms ease-out')),
      // 如果多个转场都有同样的时间线配置，就可以把它们合并进同一个 transition 定义中
      transition('a=>b,b=>a', animate('1000ms ease-in')),
      // 如果要对同一个转场的两个方向都使用相同的时间线，就可以使用 <=> 这种简写语法：
      // transition('true<=>false', animate('1000ms ease-in')),
      //有时希望一些样式只在动画期间生效，但在结束后并不保留它们。这时可以把这些样式内联在 transition 中进行定义。
      transition('a=>c', [
        style({
          backgroundColor: 'yellow',
          transform: 'scale(1.2)'
        }),
        animate('2000ms ease-out', style({
          backgroundColor: 'brown',
          transform: 'scale(1.1)'
        }))
      ]),
      //*通配符表示任何状态
      transition('*=>d', animate('1000ms ease-in')),
      //void匹配没有被加入的状态
      //使用void和*可定义进场离场动画
      //*=>void，void=>*，有别名：:leave,:enter
      // transition('*=>void', [
      //   style({
      //     opacity: 1,
      //   }),
      //   animate('1000ms ease-out', style({
      //     opacity: 0,
      //   }))
      // ]),
      transition('void=>*', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      //不同状态的进场和离场(试验之前先把*=>void注释掉，因为其优先级高)
      transition('true=>void', [
        animate(1000, style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('animateTwo', [
      //使用*属性值处理尺寸未知的情况(自动计算尺寸)
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        //时间线有三个参数：持续时间、延迟、缓动
        animate('1000ms 200ms ease-in-out', style({height: 0}))
      ])
    ]),
    trigger('animateThree', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(1000, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        //使用keyframes+offset定义关键帧动画
        //offset是可选的，如果不定义将平均分
        animate(1000, keyframes([
          style({opacity: 1, transform: 'translateX(0)', offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
        ]))
      ])
    ]),
    trigger('animateFour', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      //使用并行动画组，来为不同的样式使用不同的时间线
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.5s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('2s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('5s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('2s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
    //使用(@triggerName.event)可以执行动画回调，见模版
  ]
})
export class AjaAnimationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  start = true;
  isShow = true;
  isShow2 = true;
  isShow3 = true;
  isShow4 = true;

  startAnimation($event){
    console.log('start',$event)
  }
  endAnimation($event){
    console.log('end',$event)
  }
}
