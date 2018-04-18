import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aaa-user-input',
  templateUrl: './aaa-user-input.component.html',
  styleUrls: ['./aaa-user-input.component.css']
})
export class AaaUserInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eventHandler(param){
    console.log('eventHandler',param);
  }

  keyUpEventHandler(event:KeyboardEvent){
    console.log('key up event',event);
  }

}
