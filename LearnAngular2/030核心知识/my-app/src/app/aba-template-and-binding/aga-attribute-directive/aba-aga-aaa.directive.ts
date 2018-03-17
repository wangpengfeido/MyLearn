//一个简单的指令
import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[abaAgaAaa]'
})
export class AbaAgaAaaDirective {

  constructor(private el: ElementRef) {
    //注入ElementRef，可以引用宿主DOM元素
    // el.nativeElement.style.backgroundColor = this.enterColor || 'yellow';
  }

  ngAfterViewInit() {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor || 'yellow';
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

  //使用HostListener监听宿主元素事件
  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeColor(this.enterColor || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeColor('black');
  }

  //使用Input绑定
  //可以指定多个input属性
  @Input() enterColor: string;
  //指定别名,绑定到指令名
  @Input('abaAgaAaa') backgroundColor: string;


}
