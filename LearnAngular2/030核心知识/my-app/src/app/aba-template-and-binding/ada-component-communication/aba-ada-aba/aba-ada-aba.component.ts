import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aba-ada-aba',
  templateUrl: './aba-ada-aba.component.html',
  styleUrls: ['./aba-ada-aba.component.css']
})
export class AbaAdaAbaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count=0;

  add(){
    this.count++;
  }

  sub(){
    this.count--;
  }

}
