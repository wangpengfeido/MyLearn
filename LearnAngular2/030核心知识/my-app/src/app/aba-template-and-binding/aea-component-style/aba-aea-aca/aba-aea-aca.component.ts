import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'aba-aea-aca',
  templateUrl: './aba-aea-aca.component.html',
  //有几种方式把样式加入组件：1.设置styles或styleUrls元数据;2.内联在模板的 HTML 中;3.通过 CSS 文件导入
  //文档说可以混合使用styles和styleUrls，但好像不行
  styles:['.red{background-color: red;}'],
  //使用CLI构建时，styleUrls中可以使用sass\less\stylus
  styleUrls: ['./aba-aea-aca.component.css','./notCss.less'],

  //可以配置 .angular-cli.json 文件，使其包含所有外部资源
  //默认有一个全局styles.css文件

  //视图的封装模式，即控制css生效范围的方式
  //Native：使用Shadow DOM，样式不进不出
  // Emulated(默认)：预处理css，样式只进不出
  // None方式：不使用视图封装，样式可进可出
  encapsulation:ViewEncapsulation.Emulated,
  //当使用Emulated模式时，预处理器会在DOM上添加一些属性，来模拟Shadow Dom。css使用这些属性（选择器）来限制生效范围
})
export class AbaAeaAcaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
