//TODO
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aca-lifecycle-hook',
  templateUrl: './aca-lifecycle-hook.component.html',
  styleUrls: ['./aca-lifecycle-hook.component.css']
})
export class AcaLifecycleHookComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  num = 1;
  num2 = 1;
  isShow = true;

}
