import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aba-template-syntax',
  templateUrl: './aba-template-syntax.component.html',
  styleUrls: ['./aba-template-syntax.component.css']
})
export class AbaTemplateSyntaxComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  a = 'aaa';

  list = [{
    index: 1,
    str: 'xxx',
  }, {
    index: 2,
    str: 'yyy',
  }];

  isDisabled = true;

  getVal() {
    return 10;
  }

  handleClick($event, param) {
    console.log('clicked', $event, param);
  }

  handleEvent($event) {
    console.log('handle event', $event);
  }

  number1 = 10;
  number2 = 20;

  currentClass = {
    'red': true,
    'bold': false,
  };
  currentStyle = {
    'background-color': 'green',
    'font-weight': 'bold'
  };
  b = 'bbb';

  isShow = true;
  list2 = [{
    index: 1,
    str: 'xxx',
  }, {
    index: 2,
    str: 'yyy',
  }];
  switchValue = 0;

  notNullValue = {a: 'aaa'};

  anyValue: { a: string } = {a: 'aaa'};

  console(param) {
    console.log('...', param);
  }
}
