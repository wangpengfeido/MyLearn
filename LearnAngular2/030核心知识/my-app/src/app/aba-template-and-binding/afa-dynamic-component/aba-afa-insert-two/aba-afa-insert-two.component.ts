import {Component, Input, OnInit} from '@angular/core';
import {AbaAfaInsert} from "../aba-afa-insert.component";

@Component({
  selector: 'aba-afa-insert-two',
  templateUrl: './aba-afa-insert-two.component.html',
  styleUrls: ['./aba-afa-insert-two.component.css']
})
//被动态插入的两个组件实现了AbaAfaInsert接口，保证参数一致
export class AbaAfaInsertTwoComponent implements AbaAfaInsert, OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() data: any;

}
