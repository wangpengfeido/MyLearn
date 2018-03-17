import {Component, OnInit} from '@angular/core';
import {AbaAfaInsertOneComponent} from "./aba-afa-insert-one/aba-afa-insert-one.component";
import {AbaAfaInsertTwoComponent} from "./aba-afa-insert-two/aba-afa-insert-two.component";

@Component({
  selector: 'app-afa-dynamic-component',
  templateUrl: './afa-dynamic-component.component.html',
  styleUrls: ['./afa-dynamic-component.component.css']
})
export class AfaDynamicComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  items = [{
    component: AbaAfaInsertOneComponent,
    data: 111111,
  }, {
    component: AbaAfaInsertTwoComponent,
    data: 222222,
  }]

}
