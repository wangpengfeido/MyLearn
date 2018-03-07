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
}
