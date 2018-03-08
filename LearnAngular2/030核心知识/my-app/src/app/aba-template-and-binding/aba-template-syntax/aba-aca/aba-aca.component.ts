import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'aba-aca',
  templateUrl: './aba-aca.component.html',
  styleUrls: ['./aba-aca.component.css'],
  //通过元数据数组来指定输入/输出属性
  inputs:['inputTwo','inputFour:valueFour'],
  outputs:['outputTwo','outputFour:clickFour']
})
export class AbaAcaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  //通过装饰器来指定输入/输出属性
  @Input() inputOne;
  @Output() outputOne = new EventEmitter<any>();

  inputTwo;
  outputTwo=new EventEmitter<any>();

  //指定别名
  @Input('valueThree') inputThree;
  @Output('clickThree') outputThree = new EventEmitter<any>();

  inputFour;
  outputFour=new EventEmitter<any>();

  handleClick(){
    this.outputOne.emit(this.inputOne);
    this.outputTwo.emit(this.inputTwo);
  }
  handleClick2(){
    this.outputThree.emit(this.inputThree);
    this.outputFour.emit(this.inputFour);
  }
}
