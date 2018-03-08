import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'aba-aba',
  templateUrl: './aba-aba.component.html',
  styleUrls: ['./aba-aba.component.css']
})
export class AbaAbaComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() num: number | string;
  @Output() numChange = new EventEmitter<number>();

  inc() {
    this.num = +this.num + 1;
    this.numChange.emit(this.num);
  }
  dec() {
    this.num = +this.num - 1;
    this.numChange.emit(this.num);
  }
}
