import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ada-component-communication',
  templateUrl: './ada-component-communication.component.html',
  styleUrls: ['./ada-component-communication.component.css']
})
export class AdaComponentCommunicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  valueOne={
    x:'xxx',
    y:'yyy',
  };

  valueTwo={
    x:'xxxx',
    y:'yyyy',
  };

}
