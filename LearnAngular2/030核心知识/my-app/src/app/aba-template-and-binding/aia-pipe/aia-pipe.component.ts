import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-aia-pipe',
  templateUrl: './aia-pipe.component.html',
  styleUrls: ['./aia-pipe.component.css']
})
export class AiaPipeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  myDate = new Date();

  myNum = 3;

  myDate2 = new Date();

  mySubject = new Subject();

  mySubjectNext() {
    this.mySubject.next(Math.random());
  }

  inputText;

  myJson = {a: 'aaa'};
}
